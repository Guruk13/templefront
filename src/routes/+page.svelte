<script>
	import DizzyBg from '../components/dizzyBg.svelte';
	import logoCatchLess from '../lib/images/logoCatchLess.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-[93vh]">
	<div class="wrapper">
		<DizzyBg />
		<div class="filigrane">
			<div class="flex">
				<i class="lni lni-calculator text-white">
					<!-- Label --> randommmmmmm
				</i>
			</div>
			<img
				src={logoCatchLess}
				alt="Logo"
				class=" object-contain mx-auto w-96 h-96 md:w-[700px] md:h-[700px]"/>


		</div>
	</div>A list of Font Awesome icons and their CSS content values
</section>

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
		background: radial-gradient(at center 35%, rgb(42, 42, 42) 30%, rgba(0, 0, 0, 0.65) 70%);

		position: relative;
		z-index: 1;
		height: 100%;
		width: 100%;
	}
</style>
