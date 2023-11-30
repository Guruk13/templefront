<script>
	import DizzyBg from '../components/dizzyBg.svelte';
	import PlanningTeaser from '../components/planning/planningTeaser.svelte';
	//import ShopTeaser from '../components/planning/shopTeaser.svelte';
	import logoCatchLess from '../lib/images/logoGrayRevert.png';
	export const prerender = true;
</script>

<svelte:head>
	<title>The Temple ⭐ Accueil</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-[93vh]">
	<div class="wrapper bg-black">
		<DizzyBg />
		<div class="filigrane ">
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
					<div class="h-1/6 md:h-1/6 flex justify-center text-white items-center font-templeslim text-2xl md:text-4xl mx-6xl ">Sport<i class="lni lni-star-fill text-xl md:text-4xl mx-6"></i>Art<i class="lni lni-star-fill text-xl md:text-4xl mx-6"></i>Culture</div>
				</div>
				<div class="md:h-1/6 h-2/6 flex flex-col md:flex-row justify-around text-center font-templeband  text-3xl xl:text-5xl">
					<!--social -->
					<div class="h-2/6 text-white flex space-x-4 items-center justify-center"><i class="lni lni-instagram"></i><p> THETEMPLEBORDEAUX</p></div>
					<div class="h-2/6 text-white flex space-x-4 items-center justify-center"><i class="lni lni-facebook"></i><p>FACEBOOK</p></div>
					<div class="h-2/6 text-white flex space-x-4 items-center justify-center"><i class="lni lni-phone"></i><p>01 23 45 67 89</p></div>
				</div>
			</div>
		</div>
	</div>
</section>
<PlanningTeaser/>



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
