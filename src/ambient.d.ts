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
  tags: Array<Tag>,
  content: string,
}

type Tag = {
  name: string,
  color: null // Should have color depending on name?
}
