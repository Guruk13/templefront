import * as universal from '../entries/pages/events/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/events/+page.ts";
export const imports = ["_app/immutable/nodes/3.22dd2b62.js","_app/immutable/chunks/index.c5a51ea4.js"];
export const stylesheets = ["_app/immutable/assets/dizzyBg.51a8b055.css"];
export const fonts = [];
