import "server-only";
import db from "./index";
import { listings } from "./schema";
import { cache } from "react";
import { eq } from "drizzle-orm";

export const getHomeData = cache(async () => {
  const firstFour = await db.select().from(listings).limit(4);

  return firstFour;
});

export const getListing = cache(async (id: number) => {
  const listing = await db.select().from(listings).where(eq(listings.id, id));

  return listing;
});

export const getAllListings = cache(async () => {
  const allListings = await db.select().from(listings);

  return allListings;
});
