import { sql } from "@vercel/postgres";

export async function load({ params }) {
  console.log("Param", params);
  return {
    post: await sql`SELECT id, title, to_char(dateadded, 'DD/MM/YYYY') as dateadded, content, (SELECT name FROM tags WHERE tags = tags.id) as tag FROM posts WHERE tags = (SELECT id FROM tags WHERE tags.name = ${params.category});`
  }
}
