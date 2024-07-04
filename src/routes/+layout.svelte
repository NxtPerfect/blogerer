<script>
	import Nav from './Nav.svelte';
  import Footer from './Footer.svelte'
  import '../app.css';
</script>

<div class="app bg-secondary">
	<Nav />

	<main>
		<slot />
	</main>

  <Footer />
</div>
