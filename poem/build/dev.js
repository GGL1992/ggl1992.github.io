import * as fs from "node:fs";
import { exec } from "node:child_process";

let timer = null;

const handlerBuild = () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    exec("npm run build", (error, stdout, stderr) => {
      // 处理错误
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      // 处理标准错误
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      // 处理标准输出
      console.log(`stdout: ${stdout}`);
    });
  }, 2500);
}


fs.watch('./pageConfig', {recursive: true},(eventType, filename) => {
  handlerBuild();
})
