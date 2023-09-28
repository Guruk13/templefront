<script lang="ts">
	import eventExampel from '$lib/images/exampleEvent.webp';
	let title = ' GALA DE SEPTEMBRE ';
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
	<div
		class=" overflow-hidden text-gray-600 font-templeband text-[12em] leading-[0.7] w-full whitespace-nowrap"
	>
		
		{#each superTitleArray as superTitle}
			<div class="text-clip overflow-hidden">{superTitle}</div>
			{/each}
	</div>
	<div class="absolute w-full h-full">
		<div class="flex w-full h-full items-center justify-center">
			<div class="bg-slate-500 flex flex-col lg:flex-row">
				<h2 class="font-templeevt bg-red-300 text-white w-full text-3xl lg:hidden">
					{title}
				</h2>
				<img
					src={eventExampel}
					class="h-[452px] w-[320px] lg:w-auto lg:h-[650px] lg:aspect-A1"
					alt=""
				/>
				<div class="bg-slate-500 flex flex-col">
					<h2 class="font-templeevt bg-red-300 text-white w-full text-6xl hidden lg:block">
						{title}
					</h2>
					<div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-row-6 gap-8 m-8 h-full">
						<div
							class="bg-red-300 row-span-6 flex items-center justify-center font-firamed text-center text-1 flex-col"
						>
							<p>Random BOINAME VS Perpetuous MYSTERIO</p>
							<hr class="h-px w-[80%] my-8 border-0 bg-gray-700" />
							<p>il y'aura beacoup de gens</p>
							<hr class="h-px w-[80%] my-8 border-0 bg-gray-700" />
							<p>amenez des couca coula aussi</p>
						</div>

						<div
							class="bg-red-300 row-span-4 flex flex-col font-templeevt items-center justify-center"
						>
							<p class="grow text-[10em] flex items-center">29</p>

							<div class="grow flex items-center text-6xl"><p>SEPTEMBRE</p></div>
							<div class="grow flex items-center text-4xl"><p>19H-22h</p></div>
						</div>

						<div
							class="drop-shadow-2xl row-span-2 flex items-center justify-center font-templeslim text-6xl"
						>
							<button class="p-5 rounded-full btn bg-red-300">En savoir +</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
