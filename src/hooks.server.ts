import { redirect } from "@sveltejs/kit"

const public_paths = [
  "/login",
  "/categories",
  "/post",
  "/posts",
  "/",
  "/add" // HACK: TEMPORARY
]

function isPathAllowed(path: string) {
  return public_paths.some((allowedPath) =>
    path === allowedPath || path.startsWith(allowedPath + '/') || path.startsWith(allowedPath + "__data.json")
  )
}

export const handle = async ({ event, resolve }) => {
  let user = null
  if (event.cookies.get('name') !== undefined && event.cookies.get('name') === "admin") {
    user = "admin"
  }

  const url = new URL(event.request.url)
  if (!user && !isPathAllowed(url.pathname)) {
    console.log("Redirecting to login from:", url.pathname)
    throw redirect(302, '/login')
  }

  if (user) {
    event.locals.user = user

    if (url.pathname === "/login") {
      throw redirect(302, '/add')
    }
  }

  const response = await resolve(event)

  return response
}
