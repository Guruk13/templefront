<script lang="ts">
	import eventExampel from '$lib/images/exampleEvent.webp';
	let title = ' GALA DE SEPTEMBRE 	';

	//]todo, insure different random begin line to unsure no sync ever happen
	let superTitleArray: string[] = [];
	for (let i = 0; i < 12; i++) {
		let titlearray = title.split(' ');
		let min = Math.ceil(0);
		let max = Math.floor(titlearray.length);
		let startCut = Math.floor(Math.random() * (max - min) + min);
		titlearray = titlearray.slice(startCut);
		let composed = titlearray.reduce((x, y) => x + ' ' + y);
		min = Math.ceil(0);
		max = Math.floor(composed.length);
		startCut = Math.floor(Math.random() * (max - min) + min);
		composed = composed.slice(startCut);
		let superTitle = composed + ' ' + title.repeat(3);
		superTitleArray.push(superTitle);
	}
</script>

<section class="relative bg-slate-700 flex h-[750px] max-h-[2000px]">
	<div class=" text-gray-600 font-templeband text-[12em] leading-[0.7] w-full whitespace-nowrap">
		<div />
		{#each superTitleArray as superTitle}
			<div class="text-clip overflow-hidden">{superTitle}</div>{/each}
	</div>
	<div class="absolute w-full h-full">
		<div class="flex w-full h-full items-center justify-center">
			<div class="bg-slate-500 flex flex-col lg:flex-row  ">
				<h2 class="font-templeevt bg-red-300 text-white w-full text-3xl lg:hidden">
					{title}
				</h2>
				<img
					src={eventExampel}
					class="h-[452px] w-[320px] lg:w-auto lg:h-[650px] lg:aspect-A1"
					alt=""
				/>
				<div class="bg-slate-500 flex flex-col ">
					<h2 class="font-templeevt bg-red-300 text-white w-full text-6xl hidden lg:block">
						{title}
					</h2>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8 h-full">
						<div class="bg-red-300">29 BRUMAIRE 2023 19H</div>
						<div class="bg-red-300">pesée au gramme près à 10h (pas de frite la veille svp)</div>
						<div class="bg-red-300">combattants svelte & gourmand puissant</div>
						<div class="bg-red-300">99$ adulte 99$ enfants</div>
						
					</div>
					<div class="bg-red-300 mx-2">Lire la suite</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
