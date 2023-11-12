import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    // @ts-expect-error
    uri: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
