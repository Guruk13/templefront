<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import github from '$lib/images/github.svg';
</script>

<header>
	<!-- Navbar goes here -->
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<!-- Website Logo -->
					<div>
						<a href="#" class="flex items-center py-4 px-2">
							<img src={logo} alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg">Navigation</span>
						</a>
					</div>
					<!-- Primary Navbar items -->

					<ul class="list-none hidden md:flex items-center space-x-1">
						<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
							<a
								class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
								href="/about">About</a
							>
						</li>
						<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
							<a
								class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
								href="/sverdle">Sverdle</a
							>
						</li>
						<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
							<a
								class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
								href="/">Home</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
