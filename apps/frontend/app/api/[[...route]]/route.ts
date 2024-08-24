import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

app.post("/search", async (c) => {
  const { query } = await c.req.json();
  return c.json({
    results: `You searched for hmmm: ${query}`,
  });
});

export const GET = handle(app);
export const POST = handle(app);
