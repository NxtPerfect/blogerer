import { sql } from "@vercel/postgres";

export async function load() {
  return {
    tags: await sql`SELECT name, color FROM tags;`
  }
}

// Here we need to parse the content
// It should be divided into array with each
// <p> starting and </p> ending string
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(data.get("content"))
    // test
    const content = data.get("content");
    const paragraph = content.slice(content.search(/<p>/) + "<p>".length, content.search(/<\/p>/));
    console.log(paragraph)
    // const response = await sql`INSERT INTO posts;`
    // post: await sql`INSERT INTO posts ("title", "dateadded", "content", "tags") VALUES ('My very first post', CURRENT_DATE, '{"This is simply a test article that i''m using in prod, what about it ?", "There''s also a need to test if different sections work", "Now let''s get to work"}', (SELECT id FROM tags WHERE name = 'Web'));`
  }
}
