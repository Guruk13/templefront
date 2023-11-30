<script>
	import timetable from '../../lib/images/timetable.jpg';
	import PowerHour from './powerHour.svelte';
	export const prerender = true;
</script>

<div class="grid gap-4 mx-5 my-5">
	<div>
		<img class="w-full h-[550px] max-w-full rounded-lg" src={timetable} alt="" />
	</div>
	<div class="grid grid-rows-5 grid-cols-5 xl:grid-rows-1 gap-4">
		<div
			class="bg-emerald-900 text-white col-span-5 row-span-1  xl:col-span-1 text-xl flex flex-col font-templeevt items-center justify-center h-auto max-w-full rounded-lg"
		>
			<div class="grow flex items-center xl:text-4xl font-templescript"><p>Cour d'essai</p></div>
			<div class="grow flex items-center xl:text-3xl"><p>10$</p></div>
		</div>

		<div
			class="bg-pink-500 row-span-1 text-xl flex flex-col col-span-5  xl:col-span-1 font-templeevt items-center justify-center h-auto max-w-full rounded-lg"
		>
			<div class="grow flex items-center xl:text-4xl font-templescript"><p>Cours du soir</p></div>
			<div class="grow flex items-center xl:text-3xl"><p>365$ à l'année</p></div>
			<div class="grow flex items-center xl:text-4xl"><p>1$/JOUR</p></div>
		</div>

		<div
			class="bg-blue-500 row-span-1 text-xl flex flex-col col-span-5  xl:col-span-1 font-templeevt items-center justify-center h-auto max-w-full rounded-lg"
		>
			<div class="grow flex items-center xl:text-4xl font-templescript">
				<p>Cours Cardio</p>
			</div>
			<div class="grow flex items-center xl:text-3xl"><p>260$ à l'année</p></div>
			<div class="grow flex items-center xl:text-4xl"><p>0.75$/JOUR</p></div>
		</div>

		<div
			class="bg-yellow-500 row-span-1 text-xl flex flex-col col-span-5  xl:col-span-1 font-templeevt items-center justify-center h-auto max-w-full rounded-lg"
		>
			<div class="grow flex items-center xl:text-4xl font-templescript"><p>KIDZ</p></div>
			<div class="grow flex items-center xl:text-3xl"><p>250$ à l'année</p></div>
			<div class="grow flex items-center xl:text-4xl"><p>0.75$/JOUR</p></div>
		</div>

		<div
			class="bg-black text-white font-templeband row-span-1 text-xl flex flex-col col-span-5  xl:col-span-1 items-center justify-center h-auto max-w-full rounded-lg"
		>
			<div class="grow flex items-center xl:text-4xl"><p>UNLIMITED</p></div>
			<div class="grow flex items-center xl:text-3xl"><p>500$ à l'année</p></div>
			<div class="grow flex items-center xl:text-4xl"><p>41$/mois</p></div>
		</div>
	</div>
</div>
<PowerHour />
