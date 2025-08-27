import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFruitSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Fruits API routes
  app.get("/api/fruits", async (req, res) => {
    try {
      const fruits = await storage.getAllFruits();
      res.json(fruits);
    } catch (error) {
      console.error("Error fetching fruits:", error);
      res.status(500).json({ error: "Failed to fetch fruits" });
    }
  });

  app.get("/api/fruits/:id", async (req, res) => {
    try {
      const fruit = await storage.getFruit(req.params.id);
      if (!fruit) {
        return res.status(404).json({ error: "Fruit not found" });
      }
      res.json(fruit);
    } catch (error) {
      console.error("Error fetching fruit:", error);
      res.status(500).json({ error: "Failed to fetch fruit" });
    }
  });

  app.get("/api/fruits/name/:name", async (req, res) => {
    try {
      const fruit = await storage.getFruitByName(req.params.name);
      if (!fruit) {
        return res.status(404).json({ error: "Fruit not found" });
      }
      res.json(fruit);
    } catch (error) {
      console.error("Error fetching fruit by name:", error);
      res.status(500).json({ error: "Failed to fetch fruit" });
    }
  });

  app.post("/api/fruits", async (req, res) => {
    try {
      const validatedData = insertFruitSchema.parse(req.body);
      const fruit = await storage.createFruit(validatedData);
      res.status(201).json(fruit);
    } catch (error) {
      console.error("Error creating fruit:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid fruit data", details: error });
      }
      res.status(500).json({ error: "Failed to create fruit" });
    }
  });

  app.put("/api/fruits/:id", async (req, res) => {
    try {
      const validatedData = insertFruitSchema.partial().parse(req.body);
      const fruit = await storage.updateFruit(req.params.id, validatedData);
      if (!fruit) {
        return res.status(404).json({ error: "Fruit not found" });
      }
      res.json(fruit);
    } catch (error) {
      console.error("Error updating fruit:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid fruit data", details: error });
      }
      res.status(500).json({ error: "Failed to update fruit" });
    }
  });

  app.delete("/api/fruits/:id", async (req, res) => {
    try {
      const success = await storage.deleteFruit(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Fruit not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting fruit:", error);
      res.status(500).json({ error: "Failed to delete fruit" });
    }
  });

  // Stock tracking endpoint
  app.get("/api/stock", async (req, res) => {
    try {
      const fruits = await storage.getAllFruits();
      const stockFruits = fruits.filter(fruit => fruit.inStock);
      res.json({
        inStock: stockFruits,
        nextStockTime: Date.now() + (1 * 60 * 60 * 1000 + 44 * 60 * 1000 + 48 * 1000) // 1h 44m 48s from now
      });
    } catch (error) {
      console.error("Error fetching stock:", error);
      res.status(500).json({ error: "Failed to fetch stock information" });
    }
  });

  // Trade calculation endpoint
  app.post("/api/calculate-trade", async (req, res) => {
    try {
      const { yourItems, theirItems, mode } = req.body;
      
      if (!Array.isArray(yourItems) || !Array.isArray(theirItems)) {
        return res.status(400).json({ error: "Invalid trade data" });
      }

      let yourTotal = 0;
      let theirTotal = 0;

      // Calculate your items total
      for (const itemName of yourItems) {
        const fruit = await storage.getFruitByName(itemName);
        if (fruit) {
          yourTotal += mode === 'permanent' ? fruit.permanentValue : fruit.value;
        }
      }

      // Calculate their items total
      for (const itemName of theirItems) {
        const fruit = await storage.getFruitByName(itemName);
        if (fruit) {
          theirTotal += mode === 'permanent' ? fruit.permanentValue : fruit.value;
        }
      }

      const difference = yourTotal - theirTotal;
      const percentage = yourTotal > 0 ? ((difference / yourTotal) * 100) : 0;

      let result: string;
      if (percentage < -25) {
        result = 'HUGE LOSS';
      } else if (percentage < -10) {
        result = 'LOSS';
      } else if (percentage >= -10 && percentage <= 10) {
        result = 'FAIR';
      } else if (percentage <= 25) {
        result = 'WIN';
      } else {
        result = 'HUGE WIN';
      }

      if (yourTotal === 0 && theirTotal === 0) {
        result = 'NEUTRAL';
      }

      res.json({
        yourTotal,
        theirTotal,
        difference: Math.abs(difference),
        percentage: Math.abs(percentage),
        result
      });
    } catch (error) {
      console.error("Error calculating trade:", error);
      res.status(500).json({ error: "Failed to calculate trade" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
