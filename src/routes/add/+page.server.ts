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
    const data: FormData = await request.formData();
    console.log("Content:", data.get("content"))
    console.log("Category:", data.get("category"))
    // test
    let content: string | undefined = data.get("content")?.toString().trim();
    if (content === undefined) {
      console.error("No content found")
      return;
    }
    let startingTagPos: number = content.search(/<p>/)
    let endingTagPos: number = content.search(/<\/p>/)
    const paragraphs: Array<string> = []
    while (endingTagPos != -1 && startingTagPos != -1) {
      paragraphs.push(content.slice(startingTagPos + "<p>".length, endingTagPos).trim());
      content = content.slice(endingTagPos + "</p>".length, content.length).trim();
      console.log("Parsed paragraph:", paragraphs)
      console.log("Current content:", content)
      startingTagPos = content.search(/<p>/)
      endingTagPos = content.search(/<\/p>/)
    }
    // const response = await sql`INSERT INTO posts;`
    // post: await sql`INSERT INTO posts ("title", "dateadded", "content", "tags") VALUES ('My very first post', CURRENT_DATE, '{"This is simply a test article that i''m using in prod, what about it ?", "There''s also a need to test if different sections work", "Now let''s get to work"}', (SELECT id FROM tags WHERE name = 'Web'));`
  }
}
