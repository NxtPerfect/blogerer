<script>
	import Nav from './Nav.svelte';
  import Footer from './Footer.svelte'
  import '../app.css';
</script>

<div class="app bg-secondary">
	<Nav />

	<main class="flex flex-col text-primary justify-items-center items-center">
		<slot />
	</main>

  <Footer />
</div>
