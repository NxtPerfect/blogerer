import { sql } from "@vercel/postgres";

export async function load() {
  return {
    posts: await sql`SELECT id, title, to_char(dateadded, 'DD/MM/YYYY') as dateadded, content, (SELECT name FROM tags WHERE tags = tags.id) as tag FROM posts;`
  }
}
