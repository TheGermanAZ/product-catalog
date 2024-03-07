import { posts } from "./../../db/schema";
import { db } from "./../../db/index";
import { Post } from "../../db/schema";

export const getHomeData = async (): Promise<Post[]> => {
  const firstFour: Post[] = await db.select().from(posts).limit(4);

  return firstFour;
};
