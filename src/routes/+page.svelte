<script>
	import DizzyBg from '../components/dizzyBg.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-[93vh]">
	<div class="filigrane">
		<DizzyBg />
		<div class="filigrane">random</div>
	</div>
</section>

<style>
	.filigrane {
		background: rgb(0, 0, 0);
		background: radial-gradient(circle, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.6656863428965336) 95%);
		position: relative;
		z-index: 1;
		min-height: 100%;
		min-width: 100%;
		height: 100%;
		width: 100%;
	}
</style>
