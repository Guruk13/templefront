<script>
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>random footer memories </p>
	</footer>
</div>

<style>
</style>
