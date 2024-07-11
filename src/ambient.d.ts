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
  purple = "purple",
  black = "neutral",
  yellow = "yellow",
  teal = "teal",
  orange = "orange",
  lime = "lime",
  pink = "pink",
}

type Tag = {
  name: string,
  color: Color // Should have color depending on name?
}
