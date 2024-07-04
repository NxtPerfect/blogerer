<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<div class="fixed right-[0svw] top-[50svh] flex items-center justify-items-center w-[20ch]">
	<nav class="text-primary">
		<ul class="flex flex-col gap-8">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="underline {$page.url.pathname === '/' ? 'text-primary text-lg' : 'text-primary/75 hover:text-primary hover:px-0 transition-all duration-[50] px-4'}">
				<a href="/">{$page.url.pathname === '/' ? '>' : ''}Home</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/categories') ? 'page' : undefined} class="underline {$page.url.pathname === '/categories' ? 'text-primary text-lg' : 'text-primary/75 hover:text-primary hover:px-0 transition-all duration-[50] px-4'}">
				<a href="/categories">{$page.url.pathname === '/categories' ? '>' : ''}Categories</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/posts') ? 'page' : undefined} class="underline {$page.url.pathname === '/posts' ? 'text-primary text-lg' : 'text-primary/75 hover:text-primary hover:px-0 transition-all duration-[50] px-4'}">
				<a href="/posts">{$page.url.pathname === '/posts' ? '>' : ''}Browse Posts</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="underline {$page.url.pathname === '/about' ? 'text-primary text-lg' : 'text-primary/75 hover:text-primary hover:px-0 transition-all duration-[50] px-4'}">
				<a href="/about">{$page.url.pathname === '/about' ? '>' : ''}About Me</a>
			</li>
		</ul>
	</nav>
</div>
