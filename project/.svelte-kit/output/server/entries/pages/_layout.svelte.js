import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const app = "";
const logoCatchLess = "/templefront/_app/immutable/assets/logoGray.a03184c7.png";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><nav class="bg-white shadow-lg"><div class="max-w-6xl mx-auto px-4"><div class="flex justify-between"><div class="flex space-x-7 h-[7vh] items-center"><div>
						<a href="${escape(base, true) + "/"}" class="flex items-center px-2"><img${add_attribute("src", logoCatchLess, 0)} alt="Logo" class="w-12 mr-2">
							<span class="font-semibold text-gray-1000 text-lg">Navigation</span></a></div>
					
					<div class="hidden md:flex items-center space-x-1"><a href="" class="px-2 text-gray-500 font-semibold hover:border-b-cambbordersmall transition duration-1000">Le Sanctuaire
						</a>

						<a href="" class="px-2 text-gray-500 font-semibold hover:text-templered transition duration-1000">Planning</a>

						<a href="${escape(base, true) + "/events"}" class="px-2 text-gray-500 font-semibold hover:text-templered transition duration-1000">Events</a>
						<a href="" class="px-2 text-gray-500 font-semibold hover:text-templered transition duration-1000">Shop</a>
						<a href="" class="px-2 text-gray-500 font-semibold hover:text-templered transition duration-1000">Contact us</a></div></div>

				
				<div class="md:hidden flex items-center"><button class="outline-none mobile-menu-button"><svg class="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div>
		
		<div class="${["mobile-menu", "hidden"].join(" ").trim()}"><ul class=""><li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500">Home</a></li>
				<li><a href="" class="block text-templered text-sm px-2 py-4 hover:bg-green-500 transition duration-1000">Services</a></li>
				<li><a href="" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-1000">About</a></li>
				<li><a href="" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-1000">Contact Us</a></li></ul></div></nav></header>`;
});
const logo = "/templefront/_app/immutable/assets/logo.45eb4dd5.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-gradient-to-b from-blue-100 via-red-100 to-blue-100"><div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8"><div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div><img${add_attribute("src", logo, 0)} alt="Logo" class="relative object-contain w-24 h-24 md:w-[100px] md:h-[100px]">
				<h2 class="font-templeslim">The Temple</h2>
				<p class="max-w-xs mt-4 text-sm text-gray-600">Struggle, Dance, Fight . This is Kun Khmer</p>
				<div class="flex mt-8 space-x-6 text-gray-600"><a class="hover:opacity-75" href target="_blank" rel="noreferrer"><span class="sr-only">Facebook </span></a>
					<a class="hover:opacgradientity-75" href target="_blank" rel="noreferrer"><span class="sr-only">Instagram </span></a></div></div>
			<div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"><div><p class="font-medium">Legal</p>
					<nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500"><a class="hover:opacity-75" href>Privacy Policy </a>
						<a class="hover:opacity-75" href>Terms &amp; Conditions </a>
						<a class="hover:opacity-75" href>Returns Policy </a>
						<a class="hover:opacity-75" href>Accessibility </a></nav></div>
				<div><p class="font-medium">Legal</p>
					<nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500"><a class="hover:opacity-75" href>Privacy Policy </a>
						<a class="hover:opacity-75" href>Terms &amp; Conditions </a>
						<a class="hover:opacity-75" href>Returns Policy </a>
						<a class="hover:opacity-75" href>Accessibility </a></nav></div></div></div>
		<p class="mt-8 text-xs text-gray-800">© 2022 Comany Name</p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
