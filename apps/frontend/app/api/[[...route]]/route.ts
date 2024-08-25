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
  try {
    const { query } = await c.req.json();

    const searxngResponse = await fetch(
      `http://localhost:42069/search?q=${encodeURIComponent(query)}&format=json`,
    );

    const searxngResults = await searxngResponse.json();

    return c.json({
      results: searxngResults,
    });
  } catch (error: any) {
    return c.json(
      {
        error: "Failed to search with error" + error.message,
      },
      500,
    );
  }
});

export const GET = handle(app);
export const POST = handle(app);
