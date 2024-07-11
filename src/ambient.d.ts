type Category = {
  id: number,
  name: string,
  count: number,
  description: string,
}

type Post = {
  id: number,
  title: string,
  date: Date,
  tags: Object<string, Tag>,
  content: string,
}

export enum Color {
  red = "bg-red-950",
  green = "bg-emerald-950",
  blue = "bg-blue-950",
  purple = "bg-purple-950",
  black = "bg-neutral-950",
  yellow = "bg-yellow-950",
  teal = "bg-teal-950",
  orange = "bg-orange-950",
  lime = "bg-lime-950",
  pink = "bg-pink-950",
}

type Tag = {
  name: string,
  color: Color // Should have color depending on name?
}
