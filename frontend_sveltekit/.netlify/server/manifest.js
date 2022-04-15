var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["animals/.comments/cat.jpeg.xml", "animals/cat.jpeg", "animals/cat2.jpeg", "animals/deer.jpg", "animals/elep.jpg", "animals/lynx.jpg", "animals/owl.jpg", "animals/somCat.jpg", "animals/teddy.jpg", "animals/tiger.jpeg", "animals/tiger2.jpeg", "favicon.png", "stylesheet/css.nord.1.0.4.min.css", "stylesheet/nordhealth-mono.woff", "stylesheet/nordhealth-sans.woff2"]),
  mimeTypes: { ".xml": "application/xml", ".jpeg": "image/jpeg", ".jpg": "image/jpeg", ".png": "image/png", ".css": "text/css", ".woff": "font/woff", ".woff2": "font/woff2" },
  _: {
    entry: { "file": "start-79ee7e9f.js", "js": ["start-79ee7e9f.js", "chunks/index-cef51f08.js", "chunks/preload-helper-92d19f0a.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/index.ts.js"))),
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "moreinfo",
        pattern: /^\/moreinfo\/?$/,
        names: [],
        types: [],
        path: "/moreinfo",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "values",
        pattern: /^\/values\/?$/,
        names: [],
        types: [],
        path: "/values",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "articles/[id]",
        pattern: /^\/articles\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/articles/_id_.ts.js"))),
        a: [0, 5],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
