const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cardthumb.png","close.svg","favicon.png","heart.svg","infinite.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CFG8e1lt.js","app":"_app/immutable/entry/app.DDz8njyb.js","imports":["_app/immutable/entry/start.CFG8e1lt.js","_app/immutable/chunks/entry.DJf7yk-X.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.BpUvwN9o.js","_app/immutable/entry/app.DDz8njyb.js","_app/immutable/chunks/scheduler.DWWUxruK.js","_app/immutable/chunks/index.DLnOxTCx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BFVGH58_.js')),
			__memo(() => import('./chunks/1-qeQWxSOY.js')),
			__memo(() => import('./chunks/2-ChhLjRNU.js')),
			__memo(() => import('./chunks/3-CmUHn4h4.js')),
			__memo(() => import('./chunks/4-Cx8McIbH.js')),
			__memo(() => import('./chunks/5-B5wa3tuf.js'))
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
