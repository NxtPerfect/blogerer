import { sql } from "@vercel/postgres";


export async function load() {
  return {
    posts: await sql`SELECT id, title, to_char(dateadded, 'DD/MM/YYYY') as dateadded, content, (SELECT name FROM tags WHERE tags = tags.id) as tag FROM posts ORDER BY dateadded LIMIT 19;`
  }
}

export async function insertExamplePost() {
  return {
    post: await sql`INSERT INTO posts ("title", "dateadded", "content", "tags") VALUES ('My very first post', CURRENT_DATE, '{"This is simply a test article that i''m using in prod, what about it ?", "There''s also a need to test if different sections work", "Now let''s get to work"}', (SELECT id FROM tags WHERE name = 'Web'));`
  }
}
