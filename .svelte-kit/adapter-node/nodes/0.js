

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DE0jTGOu.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.D8lss90H.js"];
export const stylesheets = [];
export const fonts = [];
