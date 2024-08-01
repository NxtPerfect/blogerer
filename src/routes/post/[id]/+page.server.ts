import { sql } from "@vercel/postgres";

export async function load({ params }) {
  return {
    post: await sql`SELECT id, title, to_char(dateadded, 'DD/MM/YYYY') as dateadded, content, (SELECT name FROM tags WHERE tags = tags.id) as tag FROM posts WHERE id = ${params.id};`
  }
}
