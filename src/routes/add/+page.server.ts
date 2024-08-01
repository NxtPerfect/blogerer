import { sql } from "@vercel/postgres";

export async function load() {
  return {
    tags: await sql`SELECT name, color FROM tags;`
  }
}
