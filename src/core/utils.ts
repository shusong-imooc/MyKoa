import fs from "fs";


/**
 * 获取文件夹下所有文件名
 *
 * @export
 * @param {string} dir
 * @returns
 */
export function getFiles(dir: string): string[] {
    let res: string[] = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const name = dir + "/" + file;
      if (fs.statSync(name).isDirectory()) {
        const tmp = getFiles(name);
        res = res.concat(tmp);
      } else {
        res.push(name);
      }
    }
    return res;
  }