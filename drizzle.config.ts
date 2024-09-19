import { defineConfig } from "drizzle-kit";

import { env } from "@/env/server";

const config = defineConfig({
  schema: "./src/db/schema",
  dialect: "postgresql",
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

export default config;
