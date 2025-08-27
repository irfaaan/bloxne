import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const fruits = pgTable("fruits", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  value: integer("value").notNull(),
  permanentValue: integer("permanent_value").notNull(),
  price: integer("price").notNull(),
  rarity: text("rarity").notNull(),
  demand: integer("demand").notNull(),
  trend: text("trend").notNull(),
  type: text("type").notNull(),
  imageUrl: text("image_url").notNull(),
  inStock: boolean("in_stock").notNull().default(false),
});

export const insertFruitSchema = createInsertSchema(fruits).omit({
  id: true,
});

export type InsertFruit = z.infer<typeof insertFruitSchema>;
export type Fruit = typeof fruits.$inferSelect;
