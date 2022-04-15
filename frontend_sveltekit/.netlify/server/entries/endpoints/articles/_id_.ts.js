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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_articleClass_e304a29f = require("../../../chunks/articleClass-e304a29f.js");
var import_nhost_js = require("@nhost/nhost-js");
async function get({ params }) {
  const query = `{  
        _helloworld_article(where: {id: {_eq: ${params.id}}}) {
            id
            title
            rating
          }
  }`;
  console.log("get fired");
  const data = await (0, import_articleClass_e304a29f.d)(query);
  const articles = data["_helloworld_article"].map((article) => {
    return new import_articleClass_e304a29f.A(article);
  });
  if (data) {
    return {
      body: { articles }
    };
  }
  return {
    status: 404
  };
}
