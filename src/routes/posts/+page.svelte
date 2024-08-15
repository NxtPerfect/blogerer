<script lang="ts">
  import { Color } from '/src/ambient.d.ts';
  import type { Tag } from '/src/ambient.d.ts';
  import article_placeholder from '$lib/images/article_image_placeholder.png';

  const tags: Object<key, Tag> = {
    ai: {name: "AI", color: Color.red} as Tag,
    web: {name: "Web", color: Color.green} as Tag,
    algorithms: {name: "Alg", color: Color.purple} as Tag,
    functional: {name: "Func", color: Color.blue} as Tag,
  }

  export let data;
  console.log(data.posts);
  const post = data.posts.rows[0];
</script>

<svelte:head>
	<title>Browse Posts</title>
	<meta name="description" content="Post" />
</svelte:head>

  {#each data.posts.rows as post}
    <div class="mt-16 ml-[4svw] grid grid-cols-3 gap-6 w-[78svw] h-[40svh] bg-primary text-secondary rounded-xl px-8 py-3 self-start items-start justify-items-center">
      <img alt="placeholder for article" src={article_placeholder} class="rounded-xl w-full h-full"/>
      <div class="flex flex-col justify-self-stretch col-span-2 py-1">
        <h3 class="text-5xl tracking-wide">
          {post.title}
        </h3>
        <div class="mt-2 flex flex-row gap-10 text-2xl">
          <p>
            {post.dateadded}
          </p>
          <div class="pl-24 flex flex-row gap-4 text-md">
            Tag:
              <a class="rounded-2xl px-4 text-primary {tags[post.tag.toLowerCase()].color} text-center" href="posts?category={post.tag}">
                {post.tag}
              </a>
          </div>
        </div>
        <span class="overflow-ellipsis overflow-hidden text-justify font-serif text-2xl line-clamp-7">
          {#each post.content as content}
          <section>
            {@html content}
          </section>
          {/each}
        </span>
        <a type="button" class="text-primary bg-secondary hover:bg-zinc-500 active:bg-zinc-800 transition-all duration-[50] mt-1 px-16 py-2 rounded-xl font-sans text-xl w-fit self-end text-center" href="post/{post.id}">
          read more
        </a>
      </div>
    </div>
  {/each}
