<script>
	import guile from '../../lib/images/guile.jpg';
	import kid from '../../lib/images/kid.jpg';
	import female from '../../lib/images/femaleFighter.png';
</script>

<svelte:head />

<section class="py-12 bg-templeblue">
	<div class="bg-gray-400 h-[80vh]">
		<div class="h-[80%] bg-white flex flex-col items-center md:flex-row">
			<div
				class="h-full w-full object-cover h-[450px] md:w-1/3 h-[250px] aspect-square"
				style="background-image: url('{guile}'); background-size:cover"
			></div>
			<div
				class="h-full w-full object-cover h-[450px] md:w-1/3 h-[250px] aspect-square h-[150px] "
				style="background-image: url('{kid}');background-size:cover"
			></div>
			<div
				class="h-full w-full object-cover h-[450px] md:w-1/3 h-[250px] aspect-square h-[150px] "
				style="background-image: url('{female}');background-size:cover"
			></div>
		</div>
	</div>
</section>

<style>
</style>
