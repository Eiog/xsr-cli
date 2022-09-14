import chalk from "chalk";
import { existsSync, remove } from "fs-extra";
import { prompt } from "inquirer";
import download from "download-git-repo";
import ora from "ora";
import path from "path";
import { storeList } from "./store";
const Create = async (name: string, options: any) => {
  // 1.获取当前位置（当前输入命令行的位置）
  const cwd = process.cwd();

  // 2.需要创建的文件（在当前输入命名的位置进行创建）
  const targetPath = path.join(cwd, name);

  // 3.通过交互式命令行，选择我们要创建的模版
  const { projectName } = await prompt({
    name: "projectName",
    type: "list",
    choices: storeList,
    message: "请选择一个项目模版进行创建~😉",
  });

  // 4.判断项目是否已存在
  if (existsSync(targetPath)) {
    // 强制替换: dyi create my-project -f
    if (options.force) {
      await remove(targetPath);
    } else {
      // 如果存在，则通过交互式命令询问是否覆盖项目
      const { replace } = await prompt([
        {
          name: "replace",
          type: "list",
          message: `项目已存在、是否确认覆盖? ${chalk.grey(
            "覆盖后原项目无法恢复"
          )}`,
          choices: [
            { name: "确认覆盖", value: true },
            { name: "再考虑下，暂不覆盖", value: false },
          ],
        },
      ]);
      if (!replace) {
        return;
      }
      await remove(targetPath);
    }
  }

  // 5.复制我们准备好的模版
  const spinner = ora("正在下载~");
  spinner.start();
  download(projectName, name, (err: any) => {
    console.log(err);
    if (err) {
      console.log(chalk.red(`下载失败了~😧`));
      spinner.fail(`下载失败了~😧`);
      return false;
    }
    spinner.succeed();
    console.log(`${chalk.green("\n 项目创建成功~🥰")}  ${chalk.cyan(name)}`);
    console.log(`\n cd ${chalk.cyan(name)}`);
    console.log("\n pnpm install");
    console.log("\n pnpm run dev \n");
  });
};

export default Create;
