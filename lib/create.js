"use strict";
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var create_exports = {};
__export(create_exports, {
  default: () => create_default
});
module.exports = __toCommonJS(create_exports);
var import_chalk = __toESM(require("chalk"));
var import_fs_extra = require("fs-extra");
var import_inquirer = require("inquirer");
var import_download_git_repo = __toESM(require("download-git-repo"));
var import_ora = __toESM(require("ora"));
var import_path = __toESM(require("path"));
var import_store = require("./store");
const Create = (name, options) => __async(void 0, null, function* () {
  const cwd = process.cwd();
  const targetPath = import_path.default.join(cwd, name);
  const { projectName } = yield (0, import_inquirer.prompt)({
    name: "projectName",
    type: "list",
    choices: import_store.storeList,
    message: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u9879\u76EE\u6A21\u7248\u8FDB\u884C\u521B\u5EFA~\u{1F609}"
  });
  if ((0, import_fs_extra.existsSync)(targetPath)) {
    if (options.force) {
      yield (0, import_fs_extra.remove)(targetPath);
    } else {
      const { replace } = yield (0, import_inquirer.prompt)([
        {
          name: "replace",
          type: "list",
          message: `\u9879\u76EE\u5DF2\u5B58\u5728\u3001\u662F\u5426\u786E\u8BA4\u8986\u76D6? ${import_chalk.default.grey(
            "\u8986\u76D6\u540E\u539F\u9879\u76EE\u65E0\u6CD5\u6062\u590D"
          )}`,
          choices: [
            { name: "\u786E\u8BA4\u8986\u76D6", value: true },
            { name: "\u518D\u8003\u8651\u4E0B\uFF0C\u6682\u4E0D\u8986\u76D6", value: false }
          ]
        }
      ]);
      if (!replace) {
        return;
      }
      yield (0, import_fs_extra.remove)(targetPath);
    }
  }
  const spinner = (0, import_ora.default)("\u6B63\u5728\u4E0B\u8F7D~");
  spinner.start();
  (0, import_download_git_repo.default)(projectName, name, (err) => {
    console.log(err);
    if (err) {
      console.log(import_chalk.default.red(`\u4E0B\u8F7D\u5931\u8D25\u4E86~\u{1F627}`));
      spinner.fail(`\u4E0B\u8F7D\u5931\u8D25\u4E86~\u{1F627}`);
      return false;
    }
    spinner.succeed();
    console.log(`${import_chalk.default.green("\n \u9879\u76EE\u521B\u5EFA\u6210\u529F~\u{1F970}")}  ${import_chalk.default.cyan(name)}`);
    console.log(`
 cd ${import_chalk.default.cyan(name)}`);
    console.log("\n pnpm install");
    console.log("\n pnpm run dev \n");
  });
});
var create_default = Create;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
