const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DA2yB8d7.js","app":"_app/immutable/entry/app.B_fOpH0-.js","imports":["_app/immutable/entry/start.DA2yB8d7.js","_app/immutable/chunks/entry.BPC0CFY8.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.B_fOpH0-.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D6A44wRX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D2OVAjlo.js')),
			__memo(() => import('./chunks/1-DgI8dJso.js')),
			__memo(() => import('./chunks/2-3Q4kmU7W.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
