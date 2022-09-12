#! /usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_chalk = __toESM(require("chalk"));
var import_commander = require("commander");
var import_create = __toESM(require("./create"));
const program = new import_commander.Command();
program.command("create <project-name>").description("\u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE~\u{1F92A}").option("-f --force", "\u5F3A\u5236\u8986\u76D6\u540C\u540D\u76EE\u5F55~\u{1F60C}").action((name, options) => {
  (0, import_create.default)(name, options);
});
program.version(require(`../package.json`).version).usage("<command> [option]");
program.on("--help", () => {
  console.log(
    `\r
 Run ${import_chalk.default.green(`antrioe <command> --help`)} \u67E5\u770B\u5E2E\u52A9 \r
 `
  );
});
program.parse(process.argv);
