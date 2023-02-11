"use strict";
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
var store_exports = {};
__export(store_exports, {
  storeList: () => storeList
});
module.exports = __toCommonJS(store_exports);
const storeList = [
  {
    name: "vue3-starter",
    value: "github:xsrole/vue3-starter"
  },
  {
    name: "nuxt3-starter",
    value: "github:xsrole/nuxt3-starter"
  },
  {
    name: "vanilla-ts-starter",
    value: "github:xsrole/vanilla-ts-starter"
  },
  {
    name: "uniApp-starter",
    value: "github:xsrole/uniApp-starter"
  },
  {
    name: "taro-nutui-starter",
    value: "github:xsrole/taro-nutui-starter"
  },
  {
    name: "tauri-starter",
    value: "github:xsrole/tauri-starter"
  },
  {
    name: "electron-starter",
    value: "github:xsrole/electron-starter"
  },
  {
    name: "electron-vite-starter",
    value: "github:xsrole/electron-vite-starter"
  },
  {
    name: "admin-simple-starter",
    value: "github:xsrole/admin-simple-starter"
  },
  {
    name: "express-starter",
    value: "github:xsrole/express-starter"
  },
  {
    name: "ts-node-starter",
    value: "github:xsrole/ts-node-starter"
  },
  {
    name: "h3-starter",
    value: "github:xsrole/h3-starter"
  },
  {
    name: "vite-lib-starter",
    value: "github:xsrole/vite-lib-starter"
  },
  {
    name: "lib-starter",
    value: "github:xsrole/lib-starter"
  },
  {
    name: "vitepress-starter",
    value: "github:xsrole/vitepress-starter"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  storeList
});
