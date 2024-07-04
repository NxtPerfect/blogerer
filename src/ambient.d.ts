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
  red = "red",
  green = "emerald",
  blue = "blue",
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
