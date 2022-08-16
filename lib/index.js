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
program.command("create <project-name>").description("create a new project").option("-f --force", "if it exist, overwrite directory").action((name, options) => {
  (0, import_create.default)(name, options);
});
program.version(require(`../../package.json`).version).usage("<command> [option]");
program.on("--help", () => {
  console.log(
    `\r
 Run ${import_chalk.default.green(
      `aman-cli <command> --help`
    )} to understand the details \r
 `
  );
});
program.parse(process.argv);
