var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Values
});
module.exports = __toCommonJS(stdin_exports);
var import_index_46d5d7a2 = require("../../chunks/index-46d5d7a2.js");
var import_HomeButton_9073aeaa = require("../../chunks/HomeButton-9073aeaa.js");
var values_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1b6ujb5{margin:0;padding:0;box-sizing:border-box}main.svelte-1b6ujb5{text-align:center;max-width:800px;margin:0 auto;width:100%}.container.svelte-1b6ujb5{width:480px;margin:0 auto}h1.svelte-1b6ujb5{margin:70px}@media only screen and (max-width: 600px){main.svelte-1b6ujb5{text-align:center;max-width:320px;margin:0 auto}}",
  map: null
};
const Values = (0, import_index_46d5d7a2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1b6ujb5"}"><div class="${"container svelte-1b6ujb5"}"><h1 class="${"svelte-1b6ujb5"}">Values</h1>
${(0, import_index_46d5d7a2.v)(import_HomeButton_9073aeaa.H, "HomeButton").$$render($$result, {}, {}, {})}</div>
</main>`;
});
