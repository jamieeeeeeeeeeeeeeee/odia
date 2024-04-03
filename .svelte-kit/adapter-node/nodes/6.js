

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ui/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DF42zrAb.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.D8lss90H.js","_app/immutable/chunks/Button.uTP9coT2.js"];
export const stylesheets = ["_app/immutable/assets/Button.DFeZmM1O.css"];
export const fonts = [];
