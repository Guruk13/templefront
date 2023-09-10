<script>
	import DizzyBg from '../components/dizzyBg.svelte';
	import logoCatchLess from '../lib/images/logoCatchLess.png';
</script>

<svelte:head>
	<title>The Temple ⭐ Accueil</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-[93vh]">
	<div class="wrapper">
		<DizzyBg />
		<div class="filigrane">
			<div class="flex justify-center h-full flex-col">
				<div class="md:h-5/6 h-4/6 mt-0">
					<div class="h-2/3 m:h-5/6 flex justify-center">
						<img
							src={logoCatchLess}
							alt="Logo"
							class="animate-fade relative object-contain mx-auto w-96 h-96 md:w-[500px] md:h-[500px]"
						/>
					</div>

					<!--social -->
					<div class="h-1/6 md:h-1/6 flex justify-center text-white items-center ">ART <i class="lni lni-star-fill text-4xl mx-6"></i> SPORT <i class="lni lni-star-fill text-4xl mx-6"></i>CULTURE </div>
				</div>
				<div class="md:h-1/6 h-2/6 flex flex-col md:flex-row justify-around text-center">
					<!--social -->
					<div class="h-2/6 text-white"><i class="lni lni-instagram text-6xl"></i> of instagram and people</div>
					<div class="h-2/6 text-white">of instagram and people</div>
					<div class="h-2/6 text-white">of instagram and people</div>
				</div>
			</div>
		</div>
	</div>
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

		height: 100%;
		width: 100%;
	}
</style>
