

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5c912310.js","_app/immutable/chunks/index.c5a51ea4.js","_app/immutable/chunks/paths.319accd4.js"];
export const stylesheets = ["_app/immutable/assets/0.7d06b1c8.css"];
export const fonts = ["_app/immutable/assets/oleoscriptswashcaps-regular.b8811c80.ttf","_app/immutable/assets/oleoscriptswashcaps-bold.0d622c6a.ttf","_app/immutable/assets/galaxyforce.44dcc5f1.ttf","_app/immutable/assets/introrustg-base2line-webfont.2ee8ff94.woff2","_app/immutable/assets/KaushanScript-Regular.c007ebe4.otf","_app/immutable/assets/FiraSans-Medium.2db9a4fb.otf","_app/immutable/assets/FiraSans-ExtraBold.fd4311aa.otf"];
