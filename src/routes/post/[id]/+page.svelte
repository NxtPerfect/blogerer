<script lang="ts">
  import { Color } from '/src/ambient.d.ts';
  import type { Category, Post, Tag } from '/src/ambient.d.ts';

  const tags: Object<key, Tag> = {
    ai: {name: "AI", color: Color.red} as Tag,
    web: {name: "Web", color: Color.green} as Tag,
    algorithms: {name: "Alg", color: Color.purple} as Tag,
    functional: {name: "Func", color: Color.blue} as Tag,
  }

  export let data;
  console.log(data.post);
  const post = data.post.rows[0];
</script>

<svelte:head>
	<title>Post</title>
	<meta name="description" content="Post" />
</svelte:head>

<section class="mt-16 flex flex-col justify-center items-center">
  <h1 class="self-start text-4xl font-semibold text-justify">{post.title}</h1>
  <div class="mt-2 mb-8 flex self-start font-serif">
    <p>
      {post.dateadded}
    </p>
    <div class="pl-24 flex flex-row gap-4 text-md">
      Tags:
      <a class="rounded-2xl px-4 text-primary {tags[post.tag.toLowerCase()].color} text-center" href="posts&category={post.tag}">
        {post.tag}
      </a>
    </div>
  </div>
  <!-- for section in database, render each -->
  {#each post.content as content}
    <p class="mt-[1lh] w-[70ch] text-pretty text-justify leading-normal text-xl font-serif">
      {@html content}
    </p>
  {/each}
</section>
