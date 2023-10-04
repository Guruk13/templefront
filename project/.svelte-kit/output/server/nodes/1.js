

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.044c8e1b.js","_app/immutable/chunks/index.c5a51ea4.js","_app/immutable/chunks/singletons.5ecc5600.js","_app/immutable/chunks/paths.319accd4.js"];
export const stylesheets = [];
export const fonts = [];
