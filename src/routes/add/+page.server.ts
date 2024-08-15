import { redirect } from "@sveltejs/kit";
import { sql, type QueryResult } from "@vercel/postgres";

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
    // test
    let formFieldContent: string | undefined = data.get("content")?.toString().trim();
    if (formFieldContent === undefined) {
      console.error("No content found")
      return;
    }
    let startingTagPos: number = formFieldContent.search(/<p>/)
    let endingTagPos: number = formFieldContent.search(/<\/p>/)
    const paragraphs: Array<string> = []
    while (endingTagPos != -1 && startingTagPos != -1) {
      paragraphs.push(formFieldContent.slice(startingTagPos + "<p>".length, endingTagPos).trim());
      formFieldContent = formFieldContent.slice(endingTagPos + "</p>".length, formFieldContent.length).trim();
      startingTagPos = formFieldContent.search(/<p>/)
      endingTagPos = formFieldContent.search(/<\/p>/)
    }

    if (!data.get("title")?.toString()) return false;
    const title: string = data.get("title")?.toString() as string;

    // const content: string = paragraphs.map((paragraph) => {
    //   return `"${paragraph}"`
    // })
    //   .join(",")
    //   .replace("'", "''") as string;
    const content: Array<string> = paragraphs;

    if (!data.get("category")?.toString()) return false;
    const tags: string = data.get("category")?.toString() as string;

    const response: QueryResult = await sql`INSERT INTO posts ("title", "dateadded", "content", "tags") VALUES (${title}, CURRENT_DATE, ${content}, (SELECT id FROM tags WHERE name = ${tags}));`
    // const response: string = `INSERT INTO posts ("title", "dateadded", "content", "tags") VALUES ('${title}', CURRENT_DATE, '{${content}}', (SELECT id FROM tags WHERE name = ${tags}));`
    if (response) {
      throw redirect(302, "/")
    }
    console.log(response)
  }
}
