<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import article_placeholder from '$lib/images/article_image_placeholder.png';
  import { Color } from '/src/ambient.d.ts';
  import type { Category, Post, Tag } from '/src/ambient.d.ts';

  let id = 0;
  const categories: Array<Category> = [
    {id: id, name: "ML", count: 126, description: "Machine Learning, Neural Networks, Deep Learning, Large Language Models etc."} as Category,
    {id: ++id, name: "Web", count: 326, description: "Website Development, Frameworks, Frontend, Backend, Databases"} as Category,
    {id: ++id, name: "Algorithms", count: 67, description: "Data Structures, Algorithms, Competitive Programming, Leetcode, Codewars etc."} as Category,
    {id: ++id, name: "Functional", count: 67, description: "Functional Programming, Programming Languages, Monads, Immutability And Function Purity"} as Category,
  ];

  const tags: Object<key, Tag> = {
    ai: {name: "AI", color: Color.red} as Tag,
    web: {name: "Web", color: Color.green} as Tag,
    algorithms: {name: "Alg", color: Color.purple} as Tag,
    functional: {name: "Func", color: Color.blue} as Tag,
  }

  id = 0;
  const posts: Array<Post> = [
    {id: id, title: "My Very Firsty Article", date: "01/01/1990", tags: [tags.ai, tags.web, tags.functional], content: "A very descriptive description that is describing quite a lot if you think about it and it really does say a lot about society like when you think about it it really says and then when it doesn’t say it’s more like it’s you know so that you know when it knows. Then the next sentence starts and I’m trying to say that what I’m saying is saying a bit of a saying and then it happens that you’re actually using this as a sample text but no one will read this anyway so we can safely assume that unsafe safe is safe in unsafe but then it’s unsafe. You can argue about how much it it’s actually, you might be right although it’s not really that like that so W poggers."} as Post
  ]
  export let data;
  console.log(data.posts)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Personal blog written in svelte." />
</svelte:head>

<section class="flex flex-col pt-4 items-center">
  <p class="mt-[-5svh] text-[30svh] overflow-x-clip text-nowrap w-full font-serif text-transparent text-outline font-outline-4">{'Hazel '.repeat(8)}</p>
	<h1 class="mt-[-29svh] text-8xl text-primary">
    Welcome to <span class="font-serif">my</span> <span class="font-sans">personal</span> <span class="font-mono">blog</span>
	</h1>
</section>

<section class="mt-32 flex flex-col w-full font-serif justify-items-center justify-center content-center items-center text-primary">
  <p class="text-6xl">
    Here's a list of all the categories.
  </p>
  <p class="text-6xl">
    Pick one that interests you the most!
  </p>
  <div class="mt-8 flex flex-row gap-[2svw] flex-wrap text-secondary w-full pl-20">
    {#each categories as category}
      <div class="bg-primary flex flex-col items-center py-4 px-6 w-[18svw] rounded-xl">
        <h3 class="mt-8 text-5xl tracking-wide">{category.name}</h3>
        <p class="mt-2 font-sans text-2xl">({category.count})</p>
        <span class="h-full mt-4 text-xl text-center tracking-wider text-pretty font-sans">{category.description}</span>
        <a class="mt-6 bg-secondary hover:bg-zinc-500 active:bg-zinc-800 rounded-xl text-primary text-xl w-full py-3 font-sans text-center" href="posts?category={category.name}" >
          find related posts
        </a>
      </div>
    {/each}
  </div>
</section>

<section class="mt-16 text-secondary flex flex-col items-center font-serif w-full pl-20">
  <h2 class="text-6xl ml-[-5rem] mt-32 text-primary">
    or if you want the newest articles
  </h2>
  {#each posts as post}
    <div class="mt-16 grid grid-cols-3 gap-6 w-[78svw] h-[40svh] bg-primary rounded-xl px-8 py-3 self-start items-start justify-items-center">
      <img alt="placeholder for article" src={article_placeholder} class="rounded-xl w-full h-full"/>
      <div class="flex flex-col col-span-2 py-1">
        <h3 class="text-5xl tracking-wide">
          {post.title}
        </h3>
        <div class="mt-2 flex flex-row gap-10 text-2xl">
          <p>
            {post.date}
          </p>
          <div class="pl-24 flex flex-row gap-4 text-md">
            Tags:
            {#each post.tags as tag}
              <a class="rounded-2xl px-4 text-primary {tag.color} text-center" href="posts?category={tag.name}">
                {tag.name}
              </a>
            {/each}
          </div>
        </div>
        <span class="overflow-ellipsis overflow-hidden text-justify font-serif text-2xl line-clamp-7">
          {post.content}
        </span>
        <a type="button" class="text-primary bg-secondary hover:bg-zinc-500 active:bg-zinc-800 transition-all duration-[50] mt-1 px-16 py-2 rounded-xl font-sans text-xl w-fit self-end text-center" href="post/{post.id}">
          read more
        </a>
      </div>
    </div>
  {/each}
</section>
