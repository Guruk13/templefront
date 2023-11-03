<script>
	import DizzyBg from '../..//components/dizzyBg.svelte';
	import PlanningTeaser from '../..//components/planning/planningTeaser.svelte';
	import logoCatchLess from '../../lib/images/logoGrayRevert.png';
	//https://tailwindcomponents.com/component/e-commerce-home-page
</script>

<svelte:head>
	<title>The Temple ⭐ Accueil</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-[93vh]">
	<div class="wrapper bg-black">
		<DizzyBg />
		<div class="filigrane">
			
		</div>
	</div>
</section>
<PlanningTeaser />

<style>
	.wrapper {
		position: relative;
		min-height: 100%;
		min-width: 100%;
		height: 100%;
		width: 100%;
	}
	.filigrane {
		background: rgb(42, 42, 42);
		background: radial-gradient(at center 35%, rgb(42, 42, 42) 30%, rgba(0, 0, 0, 0.45) 70%);

		position: relative;

		height: 100%;
		width: 100%;
	}
</style>
