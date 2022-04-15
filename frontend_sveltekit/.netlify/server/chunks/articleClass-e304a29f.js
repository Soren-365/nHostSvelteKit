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
  A: () => Article,
  d: () => dbQuery
});
module.exports = __toCommonJS(stdin_exports);
var import_nhost_js = require("@nhost/nhost-js");
const nhost = new import_nhost_js.NhostClient({
  backendUrl: "https://ojtyorcmhmdntinlsvcf.nhost.run"
});
async function dbQuery(query) {
  const { data, error } = await nhost.graphql.request(query);
  if (error) {
    console.log("Graphql hasura query error: ", error);
  }
  console.log("rawReturnData", data, typeof data);
  return data;
}
class Article {
  constructor({ id, rating, title }) {
    this.id = id, this.rating = rating, this.title = title;
  }
}
