import { Hono } from "hono";
import { cors } from "hono/cors";

type Bindings = {
  DB: D1Database
};

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS
app.use("/*", cors({
  origin: "http://localhost:5173",
  allowMethods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: ["Content-Type"]
}));

app.get('/', (c) => c.text('API is running'));

app.get('/notes', async (c) => {
  const { results } = await c.env.DB
    .prepare('SELECT * FROM notes ORDER BY id DESC')
    .all();
  return c.json(results);
});

app.post('/notes', async (c) => {
  const body = await c.req.json();
  const { title, content } = body;
  if (!title || !content) return c.json({ error: "Title and content required" }, 400);

  await c.env.DB
    .prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
    .bind(title, content)
    .run();

  return c.json({ message: "Note created successfully" });
});

app.delete('/notes/:id', async (c) => {
  const id = c.req.param('id');
  const result = await c.env.DB
    .prepare("DELETE FROM notes WHERE id = ?")
    .bind(id)
    .run();

  if (result.meta.changes === 0) return c.json({ error: "Note not found" }, 404);

  return c.json({ message: "Note deleted successfully" });
});

export default app;
