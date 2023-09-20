<script>
	import eventExampel from '$lib/images/exampleEvent.webp';
	let title = 'OGRE BATTLE FIGHT';

	function randSpace() {
		return ' \xA0 '.repeat(Math.floor(Math.random() * (3 - 1) + 1));
	}
	//maybe new div foreach supertitle to forbid back to line ? 
	let superTitle = title + randSpace();
	superTitle = (() => {
		return superTitle.repeat(18);
	})();
</script>

<section class="relative bg-slate-700 flex h-[1000px] max-h-[2000px]">
	<div
		class="  text-gray-600 font-templeband text-[12em] leading-[0.7] break-all text-clip overflow-hidden w-[155%]"
	>
		{superTitle}
	</div>
	<div class="absolute w-full h-full">
		<div class="flex w-full h-full items-center justify-center">
			<div class="bg-slate-500 flex flex-col max-w">
				<h2 class="font-templeband bg-red-300 text-white w-full max-w-[330px] text-3xl">{title}
					
					<img src ="{eventExampel}" class="h-[460px] w-[330px]" alt=""/>
				<div class="bg-slate-500">
					<div class="" >29 BRUMAIRE 2023</div>
					<div class="bg-red-300">pesée au gramme près à 10h (pas de frite la veille svp)</div>
					<div class="">combattants svelte & gourmand puissant</div>
					<div class="bg-red-300" >29 BRUMAIRE 2023</div>


				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
