import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.71dc301e.js","_app/immutable/chunks/index.c5a51ea4.js"];
export const stylesheets = ["_app/immutable/assets/2.0b90f32a.css","_app/immutable/assets/dizzyBg.51a8b055.css"];
export const fonts = [];
