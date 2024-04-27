import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const listings = pgTable("listings", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  price: text("price").notNull(),
  imageRef: text("image_ref").notNull(),
});

export type SelectListing = typeof listings.$inferSelect;
export type InsertListing = typeof listings.$inferInsert;
