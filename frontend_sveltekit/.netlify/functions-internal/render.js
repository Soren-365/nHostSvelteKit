const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["animals/.comments/cat.jpeg.xml","animals/cat.jpeg","animals/deer.jpg","animals/elep.jpg","animals/lynx.jpg","animals/owl.jpg","animals/somCat.jpg","animals/teddy.jpg","animals/tiger.jpeg","favicon.png"]),
	mimeTypes: {".xml":"application/xml",".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-870b2896.js","js":["start-870b2896.js","chunks/index-99276b20.js","chunks/index-e369a5ed.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/index.ts.js')),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "articles/[id]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/articles/_id_.ts.js')),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "moreinfo",
				pattern: /^\/moreinfo\/?$/,
				names: [],
				types: [],
				path: "/moreinfo",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "values",
				pattern: /^\/values\/?$/,
				names: [],
				types: [],
				path: "/values",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
