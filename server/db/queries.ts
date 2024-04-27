import "server-only";
import db from "./index";
import { listings } from "./schema";
import { cache } from "react";

export const getHomeData = cache(async () => {
  const firstFour = await db.select().from(listings).limit(4);

  return firstFour;
});
