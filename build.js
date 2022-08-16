const esbuild = require("esbuild");
const path = require("path");
const glob = require("glob");
const chalk = require("chalk");
const fs = require("fs-extra");
const libPath = path.join(process.cwd(), "lib");

/** 假如lib文件夹已存在，则清空 */
if (fs.existsSync(libPath)) {
  fs.emptyDirSync(libPath);
}

/** 匹配src文件夹下所有ts文件 */
const matchFiles = async () => {
  return await new Promise((resolve) => {
    glob("src/**/*.ts", { root: process.cwd() }, function (err, files) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      resolve(files);
    });
  });
};
/** esbuild 配置 */
const build = async function () {
  await esbuild.build({
    entryPoints: await matchFiles(),
    bundle: false,
    splitting: false,
    outdir: path.join(process.cwd(), "lib"),
    format: "cjs",
    platform: "node",
    minify: false,
    color: true,
  });
  console.log(chalk.green("success build \r\n"));
};

build();
