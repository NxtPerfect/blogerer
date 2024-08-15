import { user } from "$lib/stores/user";
import { redirect } from "@sveltejs/kit";
import { sql, type QueryResult } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export const actions = {
  default: async ({ cookies, request, fetch }) => {
    const data: FormData = await request.formData()
    let password: string | undefined = data.get("password")?.toString()

    if (typeof password !== 'string' || password === undefined) {
      return {
        status: 400,
        body: { success: false }
      }
    }

    const databaseResults: QueryResult = await sql`SELECT password FROM users;`
    const correctPassword: string = databaseResults.rows[0].password
    bcrypt.compare(password, correctPassword, (err, res) => {
      if (err) return { status: 500, body: { success: false } }
      if (res === true) {
        user.set({ name: "admin" })
        cookies.set('name', "admin")
        throw redirect(302, "/add")
      }
    })
  }
}
