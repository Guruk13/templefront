<script>
	import guile from '../../lib/images/guile.jpg';

	import kid from '../../lib/images/kid.jpg';
	import female from '../../lib/images/femaleFighter.png';
</script>

<svelte:head />

<section class=" flex justify-center">
	<div
		class="py-12 bg-templeblue flex flex-col lg:flex-row-reverse w-full lg:justify-around lg:w-[75vw]"
	>
		<div class=" flex items-center justify-center flex-col-reverse gap-10 mb-10 mr-5">
			<p class=" w-64 font-firamed text-white">
				Beaucoup de cours en quantitité très variés avec beaucoup d'horrraires , viens taper dans le
				sac, t'améliorer et tout tu va voir c'est bien , y'as aussi du sparing(gentil) et du corp à
				corp en fin de séance , tu va voir c'est bien
			</p>
		</div>
		<div class="">
			<h2 class=" font-templeband text-center text-3xl uppercase bg-white lg:mb-0 mb-5">
				Entraine toi !
			</h2>

			<div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
				<div class="h-min w-full">
					<img class="object-cover" src={female} alt="subway" />
				</div>
				<div class="h-min w-full">
					<img class="object-cover" src={kid} alt="city" />
				</div>
				<div class="h-min w-full">
					<img class="object-cover" src={guile} alt="fruit" />
				</div>
				<div class="h-min w-full">
					<img class="object-cover" src={female} alt="forest" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
