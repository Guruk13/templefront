<script>
	import guile from '../../lib/images/guile.jpg';
	import kid from '../../lib/images/kid.jpg';
	import female from '../../lib/images/femaleFighter.png';
</script>

<svelte:head />

<section class=" flex justify-center">
	<div
		class="py-12 bg-templeblue h-[1200px] flex flex-col lg:flex-row-reverse w-full lg:justify-around lg:w-[75vw]"
	>
		<div class=" flex items-center justify-center flex-col-reverse gap-10 mb-10">
			<button
				class="p-5 rounded-full btn bg-blue-200  shadow-3xl  text-3xl lg:text-6xl font-templeslim drop-shadow-2xl"
				> <span class="un">Planning</span></button
			>
			<p class=" w-64 font-firamed text-white">
				Beaucoup de cours en quantitité très variés avec beaucoup d'horrraires , viens taper dans le
				sac, t'améliorer et tout tu va voir c'est bien , y'as aussi du sparing(gentil) et du corp à
				corp en fin de séance , tu va voir c'est bien 
			</p>
		</div>
		<div class="">
			<h2 class=" font-templeband text-center text-3xl uppercase bg-white">Entraine toi !</h2>
			<div class="flex justify-around h-full flex-col">
				<div class="flex justify-center h-full flex-col">
					<div class="container mx-auto px-6">
						<div
							class="h-64 rounded-md overflow-hidden bg-cover bg-center"
							style="background-image: url('{guile}')"
						>
							<div class="bg-gray-900 bg-opacity-50 flex items-center justify-end h-full">
								<div class="px-10 max-w-xl">
									<h2 class="text-2xl text-white bg-black font-templeband  font-semibold flex justify-center">Tout combattants</h2>
									<p class="mt-2 text-gray-400 flex justify-center">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere
										provident molestias ipsam sint voluptatum pariatur.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="flex justify-center h-full flex-col">
					<div class="container mx-auto px-6">
						<div
							class="h-64 rounded-md overflow-hidden bg-cover bg-center"
							style="background-image: url('{kid}')"
						>
							<div class="bg-gray-900 bg-opacity-50 flex items-center justify-end h-full">
								<div class="px-10 max-w-xl">
									<h2 class="text-2xl text-black uppercase bg-yellow-300 font-semibold flex w-full font-firamed  justify-center">Kids</h2>
									<p class="mt-2 text-gray-400 flex justify-center">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere
										provident molestias ipsam sint voluptatum pariatur.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="flex justify-center h-full flex-col">
					<div class="container mx-auto px-6">
						<div
							class="h-64 rounded-md overflow-hidden bg-cover bg-center"
							style="background-image: url('{female}')"
						>
							<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
								<div class="px-10 max-w-xl">
									<h2 class="text-2xl text-white w-full  bg-pink-300 font-semibold flex justify-center font-templeslim">Ladies</h2>
									<p class="mt-2 text-gray-400 flex justify-center">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere
										provident molestias ipsam sint voluptatum pariatur.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>



</style>
