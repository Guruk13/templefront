<script lang="ts">
	//@todo base
	let baseurl = 'http://localhost:1337'
	//props
	let bgcolor: string = 'slate';
	let bgcolorValue: number = 700;
	let color: string = 'red';
	let colorValue: number = 300;
	let bgTextValuecolor: number = 600;
	let featIn = [
		'Random BOINAME VS Perpetuous MYSTERIO',
		"il y'aura beacoup de gens",
		'amenez des couca coula aussi',
		'pesée à 15H, (pas de frite à midi)'
	];

	export let eventData:any;
	console.log(eventData);

	//consoom
	let title = eventData.EventTitle.toUpperCase();
	featIn = eventData.EventFeatured.split(',');
	bgcolor = eventData.ColorPickers[0].color;
	color = eventData.ColorPickers[1].color;
	colorValue = eventData.ColorPickers[1].ColorValue;
	let posterUrl = eventData.EventPoster.data.attributes.url
	console.log(posterUrl)
	console.log(eventData.ColorPickers[1].ColorValue)
	
	console.log(eventData.ColorPickers[0].color);

	//@todo, insure different random begin line to unsure no sync ever happen
	//@note , what if there's only one word ?

	let superTitleArray: string[] = [];
	for (let i = 0; i < 11; i++) {
		let titlearray = title.split(' ');
		let min = Math.ceil(0);
		let max = Math.floor(titlearray.length);
		let startCut = Math.floor(Math.random() * (max - min) + min);
		titlearray = titlearray.slice(startCut);
		let composed = titlearray.reduce((x: string, y: string) => x + '\u00A0' + y);
		min = Math.ceil(0);
		max = Math.floor(composed.length);
		startCut = Math.floor(Math.random() * (max - min) + min);
		composed = composed.slice(startCut);
		let superTitle = composed + '\u00A0' + title.repeat(3);
		superTitleArray.push(superTitle);
	}
</script>

<section
	class="relative bg-{bgcolor}-{bgcolorValue} flex h-auto border-y-gray-800 border-x-0 border-4"
>
	<div
		class="h-full overflow-hidden text-gray-{bgTextValuecolor} max-h-[1400px] lg:max-h-[900px] font-templeband text-[12em] leading-[0.7] w-full whitespace-nowrap"
	>
		{#each superTitleArray as superTitle}
			<div class="text-clip whitespace-nowrap overflow-hidden">{superTitle}</div>
		{/each}
	</div>
	<div class="absolute w-full h-full">
		<div class="flex w-full h-full items-center justify-center">
			<div class="bg-{bgcolor}-{bgcolorValue - 200} flex flex-col lg:flex-row">
				<h2 class="font-templeevt bg-{color}-{colorValue}  text-white w-full text-3xl lg:hidden">
					{title}
				</h2>
				<img
					src={baseurl+posterUrl}
					class=" min-w-[320px] w-[450px] lg:w-auto lg:h-[650px] aspect-A1"
					alt=""
				/>
				<div class="bg-{bgcolor}-{bgcolorValue - 200}  flex flex-col">
					<h2
						class="font-templeevt bg-{color}-{colorValue} text-white w-full text-6xl hidden lg:block"
					>
						{title}
					</h2>
					<div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-row-6 gap-8 m-5 h-full">
						<div
							class="bg-{color}-{colorValue} px-8 row-span-6 flex items-center justify-center font-firamed text-center text-1 flex-col"
						>
							{#each featIn as feat, i}
								<p>{feat}</p>
								{#if i < featIn.length - 1}<hr
										class="h-px w-[80%] my-4 lg:my-8 border-0 bg-gray-700"
									/>{/if}
							{/each}
						</div>

						<div
							class="bg-{color}-{colorValue} row-span-5 text-xl flex flex-col font-templeevt items-center justify-center"
						>
							<div class="grow lg:grow-[4] text-2xl lg:text-[8em] flex items-center">29</div>
							<div class="grow flex items-center lg:text-5xl"><p>SEPTEMBRE</p></div>
							<div class="grow flex items-center lg:text-4xl"><p>19H-22h</p></div>
						</div>

						<div
							class="drop-shadow-2xl row-span-1 flex items-center  justify-center font-templeslim text-3xl lg:text-6xl"
						>
						<div>
							<button class="p-5 rounded-full btn bg-{color}-{colorValue} hover:bg-{color}-{colorValue + 100} hover:translate-y-2 hover:translate-x-2 shadow-3xl"
								>En savoir +</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
