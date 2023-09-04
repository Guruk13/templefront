<script>
	import logo from '$lib/images/logo.png';
	import { toggle_class } from 'svelte/internal';
	//https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/
	let menuOpen = true;


</script>

<header>
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7 h-[7vh] items-center">
					<div>
						<!-- Website Logo -->
						<a href="#" class="flex items-center px-2">
							<img src={logo} alt="Logo" class="w-8 mr-2" />
							<span class="font-semibold text-gray-1000 text-lg">Navigation</span>
						</a>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex items-center space-x-1">
						<a href="" class="px-2 text-green-500 border-b-4 border-green-500 font-semibold"
							>Home</a
						>
						<a
							href=""
							class=" px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-1000"
							>Services</a
						>
						<a
							href=""
							class="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-1000"
							>About</a
						>
						<a
							href=""
							class="px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-1000"
							>Contact Us</a
						>
					</div>
				</div>

				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button class="outline-none mobile-menu-button" on:click|stopPropagation= "{()=>{menuOpen = !menuOpen}}">
						<svg
							class=" w-6 h-6 text-gray-500 hover:text-green-500"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		<!-- mobile menu -->
		<div class:hidden="{menuOpen}" class="mobile-menu">
			<ul class="">
				<li class="active">
					<a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
						>Home</a
					>
				</li>
				<li>
					<a
						href="#services"
						class="block text-templered text-sm px-2 py-4 hover:bg-green-500 transition duration-1000">Services</a
					>
				</li>
				<li>
					<a
						href="#about"
						class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-1000">About</a
					>
				</li>
				<li>
					<a
						href="#contact"
						class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-1000">Contact Us</a
					>
				</li>
			</ul>
		</div>
	</nav>
</header>

