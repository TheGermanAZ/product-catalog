import {
  bigint,
  index,
  mysqlTableCreator,
  serial,
  smallint,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import mysql from "mysql2/promise";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export var mysqlTable = mysqlTableCreator((name) => `golf-catalog_${name}`);

export var posts = mysqlTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 200 }).notNull(),
    price: varchar("price", { length: 50 }).notNull(),
    imageref: varchar("imageref", { length: 200 }).notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
