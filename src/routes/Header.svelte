<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="flex items-center justify-items-center">
	<nav class="text-primary">
		<ul class="flex flex-row gap-4">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/categories') ? 'page' : undefined}>
				<a href="/categories">Categories</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/newest') ? 'page' : undefined}>
				<a href="/newest">Newest</a>
			</li>
		</ul>
	</nav>
</header>
