<script>
	import guile from '../../lib/images/guile.jpg';
	import kid from '../../lib/images/kid.jpg';
	import female from '../../lib/images/femaleFighter.png';
</script>

<svelte:head />

<section class="py-12 bg-templeblue">
	<div class="bg-gray-400 h-[80vh]">
		<div class="h-[80%] bg-white flex flex-col items-center">
			<img
				src={guile}
				alt="Logo"
				class="h-[200px] w-[200px]"
			/>
			<img
				src={kid}
				alt="Logo"
				class="h-[200px] w-[200px]"
			/>
			<img
				src={female}
				alt="Logo"
				class="h-[200px] w-[200px]"
			/>
		</div>
	</div>
</section>

<style>
</style>
