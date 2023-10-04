import { c as create_ssr_component, e as escape, f as each, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
/* empty css                                                     */const eventExampel = "/templefront/_app/immutable/assets/exampleEvent.d80b823a.webp";
let title = " GALA DE SEPTEMBRE ";
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgcolor = "slate" } = $$props;
  let { bgcolorValue = 700 } = $$props;
  let { color = "red" } = $$props;
  let { colorValue = 300 } = $$props;
  let { bgTextValuecolor = 600 } = $$props;
  let { featIn = [
    "Random BOINAME VS Perpetuous MYSTERIO",
    "il y'aura beacoup de gens",
    "amenez des couca coula aussi",
    "pesée à 15H, (pas de frite à midi)"
  ] } = $$props;
  let superTitleArray = [];
  for (let i = 0; i < 11; i++) {
    let titlearray = title.split(" ");
    let min = Math.ceil(0);
    let max = Math.floor(titlearray.length);
    let startCut = Math.floor(Math.random() * (max - min) + min);
    titlearray = titlearray.slice(startCut);
    let composed = titlearray.reduce((x, y) => x + " " + y);
    min = Math.ceil(0);
    max = Math.floor(composed.length);
    startCut = Math.floor(Math.random() * (max - min) + min);
    composed = composed.slice(startCut);
    let superTitle = composed + " " + title.repeat(3);
    superTitleArray.push(superTitle);
  }
  if ($$props.bgcolor === void 0 && $$bindings.bgcolor && bgcolor !== void 0)
    $$bindings.bgcolor(bgcolor);
  if ($$props.bgcolorValue === void 0 && $$bindings.bgcolorValue && bgcolorValue !== void 0)
    $$bindings.bgcolorValue(bgcolorValue);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colorValue === void 0 && $$bindings.colorValue && colorValue !== void 0)
    $$bindings.colorValue(colorValue);
  if ($$props.bgTextValuecolor === void 0 && $$bindings.bgTextValuecolor && bgTextValuecolor !== void 0)
    $$bindings.bgTextValuecolor(bgTextValuecolor);
  if ($$props.featIn === void 0 && $$bindings.featIn && featIn !== void 0)
    $$bindings.featIn(featIn);
  return `<section class="${"relative bg-" + escape(bgcolor, true) + "-" + escape(bgcolorValue, true) + " flex h-auto border-y-gray-800 border-x-0 border-4"}"><div class="${"h-full overflow-hidden text-gray-" + escape(bgTextValuecolor, true) + " max-h-[1400px] lg:max-h-[900px] font-templeband text-[12em] leading-[0.7] w-full whitespace-nowrap"}">${each(superTitleArray, (superTitle) => {
    return `<div class="text-clip whitespace-nowrap overflow-hidden">${escape(superTitle)}</div>`;
  })}</div>
	<div class="absolute w-full h-full"><div class="flex w-full h-full items-center justify-center"><div class="${"bg-" + escape(bgcolor, true) + "-" + escape(bgcolorValue - 200, true) + " flex flex-col lg:flex-row"}"><h2 class="${"font-templeevt bg-" + escape(color, true) + "-" + escape(colorValue, true) + " text-white w-full text-3xl lg:hidden"}">${escape(title)}</h2>
				<img${add_attribute("src", eventExampel, 0)} class="min-w-[320px] w-[450px] lg:w-auto lg:h-[650px] aspect-A1" alt="">
				<div class="${"bg-" + escape(bgcolor, true) + "-" + escape(bgcolorValue - 200, true) + " flex flex-col"}"><h2 class="${"font-templeevt bg-" + escape(color, true) + "-" + escape(colorValue, true) + " text-white w-full text-6xl hidden lg:block"}">${escape(title)}</h2>
					<div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-row-6 gap-8 m-5 h-full"><div class="${"bg-" + escape(color, true) + "-" + escape(colorValue, true) + " px-8 row-span-6 flex items-center justify-center font-firamed text-center text-1 flex-col"}">${each(featIn, (feat, i) => {
    return `<p>${escape(feat)}</p>
								${i < featIn.length - 1 ? `<hr class="h-px w-[80%] my-4 lg:my-8 border-0 bg-gray-700">` : ``}`;
  })}</div>

						<div class="${"bg-" + escape(color, true) + "-" + escape(colorValue, true) + " row-span-5 text-xl flex flex-col font-templeevt items-center justify-center"}"><div class="grow lg:grow-[4] text-2xl lg:text-[8em] flex items-center">29</div>
							<div class="grow flex items-center lg:text-5xl"><p>SEPTEMBRE</p></div>
							<div class="grow flex items-center lg:text-4xl"><p>19H-22h</p></div></div>

						<div class="drop-shadow-2xl row-span-1 flex items-center justify-center font-templeslim text-3xl lg:text-6xl"><button class="${"p-5 rounded-full btn bg-" + escape(color, true) + "-" + escape(colorValue, true) + " shadow-3xl"}">En savoir +</button></div></div></div></div></div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1w6rf56_START -->${$$result.title = `<title>The Temple ⭐ Accueil</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1w6rf56_END -->`, ""}

${validate_component(Event, "Event").$$render(
    $$result,
    {
      bgcolor: "emerald",
      color: "yellow",
      colorValue: 700,
      bgcolorValue: 900
    },
    {},
    {}
  )}
${validate_component(Event, "Event").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
