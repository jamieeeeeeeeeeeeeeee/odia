const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","cardthumb.png","close.svg","favicon.png","heart.svg","infinite.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DAI4IygE.js","app":"_app/immutable/entry/app.CwvYioRz.js","imports":["_app/immutable/entry/start.DAI4IygE.js","_app/immutable/chunks/entry.BkLoXMJY.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.BpUvwN9o.js","_app/immutable/entry/app.CwvYioRz.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.D8lss90H.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BccNGZ8s.js')),
			__memo(() => import('./chunks/1-Buayi9Rk.js')),
			__memo(() => import('./chunks/2-s6VxL8-A.js')),
			__memo(() => import('./chunks/3-C2doHNZq.js')),
			__memo(() => import('./chunks/4-C3OQ6CFz.js')),
			__memo(() => import('./chunks/5-HwrCxAm_.js')),
			__memo(() => import('./chunks/6-Blg490DX.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cards",
				pattern: /^\/cards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cards/trumps",
				pattern: /^\/cards\/trumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/odia",
				pattern: /^\/odia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ui",
				pattern: /^\/ui\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
