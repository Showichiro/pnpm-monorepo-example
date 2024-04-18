import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

const route = app
  .use("*", cors())
  .use("*", logger())
  .get("/", (c) => {
    return c.text("Hello Hono!");
  });

const port = 3000;
console.log(`Server is running on port ${port}`);

export type AppType = typeof route;

serve({
  fetch: app.fetch,
  port,
});
