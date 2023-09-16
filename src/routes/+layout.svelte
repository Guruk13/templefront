<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />

	<main class="h-[93vh]">
		<slot />
	</main>

	<Footer/>
</div>

<style>
</style>
