<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import article_placeholder from '$lib/images/article_image_placeholder.png';

  let id = 0;
  const categories: Array<Category> = [
    {id: id, name: "ML", count: 126, description: "Machine Learning, Neural Networks, Deep Learning, Large Language Models etc."} as Category,
    {id: ++id, name: "Web", count: 326, description: "Website Development, Frameworks, Frontend, Backend, Databases"} as Category,
    {id: ++id, name: "Algorithms", count: 67, description: "Data Structures, Algorithms, Competitive Programming, Leetcode, Codewars etc."} as Category,
  ];

  id = 0;
  const posts: Array<Post> = [
    {id: id, title: "My Very Firsty Article", date: "01/01/1990", tags: ["AI", "Web", "Fp"], content: "A very descriptive description that is describing quite a lot if you think about it and it really does say a lot about society like when you think about it it really says and then when it doesn’t say it’s more like it’s you know so that you know when it knows. Then the next sentence starts and I’m trying to say that what I’m saying is saying a bit of a saying and then it happens that you’re actually using this as a sample text but no one will read this anyway so we can safely assume that unsafe safe is safe in unsafe but then it’s unsafe"} as Post
  ]
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Personal blog written in svelte." />
</svelte:head>

<section class="flex flex-col mt-4 items-center">
  <p class="top-0 text-[10rem] overflow-x-clip text-nowrap w-full font-serif text-gold">HAZEL HAZEL HAZEL HAZEL HAZEL</p>
	<h1 class="mt-[-9rem] text-4xl text-primary">
    Welcome to <span class="font-serif">my</span> <span class="font-sans">personal</span> <span class="font-mono">blog</span>
	</h1>
</section>

<section class="mt-32 flex flex-col w-full font-serif justify-items-center justify-center content-center items-center text-primary">
  <p class="text-4xl">
    Here's a list of all the categories.
  </p>
  <p class="text-4xl">
    Pick one that interests you the most!
  </p>
  <div class="mt-8 flex flex-row gap-20 flex-wrap text-secondary">
    {#each categories as category}
      <div class="bg-primary flex flex-col items-center py-2 px-6 w-[34ch] rounded-xl">
        <h3 class="mt-4 text-2xl font-semibold tracking-wide">{category.name}</h3>
        <p class="font-sans">({category.count})</p>
        <span class="mt-4 text-md text-center tracking-wide text-pretty">{category.description}</span>
        <a class="mt-8 bg-secondary hover:bg-zinc-500 active:bg-zinc-800 rounded-xl text-primary w-full py-2 font-sans text-center" href="posts&category={category.name}" >
          find related posts
        </a>
      </div>
    {/each}
  </div>
</section>

<section class="text-secondary flex flex-col items-center font-serif">
  <h2 class="text-4xl mt-32 text-primary">
    or if you want the newest articles
  </h2>
  {#each posts as post}
    <div class="mt-8 grid grid-cols-3 gap-3 w-[90ch] bg-primary rounded-xl p-4 py-3 items-center justify-items-center">
      <img alt="placeholder image for article" src={article_placeholder} class="rounded-xl w-full h-full"/>
      <div class="flex flex-col col-span-2 py-1">
        <h3 class="font-semibold text-4xl tracking-wide">
          {post.title}
        </h3>
        <div class="flex flex-row gap-10">
          <p>
            {post.date}
          </p>
          <div class="flex flex-row gap-1">
            Tags:
            {#each post.tags as tag}
              <a class="rounded-xl px-1 text-primary bg-red-800 text-center" href="posts&category={tag}">
                {tag}
              </a>
            {/each}
          </div>
        </div>
        <span class="overflow-ellipsis overflow-hidden text-justify font-serif text-lg line-clamp-6">
          {post.content}
        </span>
        <a type="button" class="text-primary bg-secondary hover:bg-zinc-500 active:bg-zinc-800 mt-1 px-10 py-2 rounded-xl font-sans w-fit self-end text-center" href="post/{post.id}">
          read more
        </a>
      </div>
    </div>
  {/each}
</section>
