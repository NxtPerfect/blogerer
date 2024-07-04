<script lang="ts">

	let categories: Array<Category> = [
    {id: 0, short_name: "ai", name: "AI"},
    {id: 1, short_name: "web", name: "Web"},
    {id: 2, short_name: "fp", name: "Functional Programming"},
    {id: 3, short_name: "py", name: "Python"},
    {id: 4, short_name: "js", name: "JavaScript"},
  ];
</script>

<svelte:head>
	<title>Categories</title>
	<meta name="description" content="Pick which category of posts you want to view." />
</svelte:head>

<h1>Categories</h1>

<div class="grid">
  <ul>
    {#each categories as category}
      <li key={category.id}><a href="/posts/{category.short_name}">{category.name}</a></li>
    {/each}
  </ul>
</div>
