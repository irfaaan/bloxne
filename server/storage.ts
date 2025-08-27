import { type Fruit, type InsertFruit } from "@shared/schema";
import { fruitsDatabase } from "../client/src/lib/fruitsDatabase";

export interface IStorage {
  getAllFruits(): Promise<Fruit[]>;
  getFruit(id: string): Promise<Fruit | undefined>;
  getFruitByName(name: string): Promise<Fruit | undefined>;
  createFruit(fruit: InsertFruit): Promise<Fruit>;
  updateFruit(id: string, fruit: Partial<InsertFruit>): Promise<Fruit | undefined>;
  deleteFruit(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private fruits: Map<string, Fruit>;

  constructor() {
    this.fruits = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize with fruits database
    Object.entries(fruitsDatabase).forEach(([name, fruitData]) => {
      const fruit: Fruit = {
        id: this.generateId(),
        name: fruitData.name,
        value: fruitData.value,
        permanentValue: fruitData.permanentValue,
        price: fruitData.price,
        rarity: fruitData.rarity,
        demand: fruitData.demand,
        trend: fruitData.trend,
        type: fruitData.type,
        imageUrl: fruitData.imageUrl,
        inStock: fruitData.inStock,
      };
      this.fruits.set(fruit.id, fruit);
    });
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  async getAllFruits(): Promise<Fruit[]> {
    return Array.from(this.fruits.values());
  }

  async getFruit(id: string): Promise<Fruit | undefined> {
    return this.fruits.get(id);
  }

  async getFruitByName(name: string): Promise<Fruit | undefined> {
    return Array.from(this.fruits.values()).find(fruit => fruit.name === name);
  }

  async createFruit(insertFruit: InsertFruit): Promise<Fruit> {
    const id = this.generateId();
    const fruit: Fruit = { ...insertFruit, id };
    this.fruits.set(id, fruit);
    return fruit;
  }

  async updateFruit(id: string, updateData: Partial<InsertFruit>): Promise<Fruit | undefined> {
    const existingFruit = this.fruits.get(id);
    if (!existingFruit) return undefined;

    const updatedFruit: Fruit = { ...existingFruit, ...updateData };
    this.fruits.set(id, updatedFruit);
    return updatedFruit;
  }

  async deleteFruit(id: string): Promise<boolean> {
    return this.fruits.delete(id);
  }
}

export const storage = new MemStorage();
