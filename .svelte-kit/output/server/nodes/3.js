

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DfzV_kfb.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.D8lss90H.js","_app/immutable/chunks/Button.uTP9coT2.js","_app/immutable/chunks/entry.CVRIgq0M.js","_app/immutable/chunks/index.BpUvwN9o.js"];
export const stylesheets = ["_app/immutable/assets/2.CgTIoE6C.css","_app/immutable/assets/Button.DFeZmM1O.css"];
export const fonts = [];
