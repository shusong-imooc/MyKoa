/**
 * 动态路由加载类
 * 需要参数 实例化后的 APP
 * 获取apiRoutes 文件下的所有文件 后缀为.ts的文件
 * 读取类容 判定是否为 Router 类型 如果是 遍历 挂载 在APP 应用实列上
 */

import Koa from 'koa';
import Router from 'koa-router';
import consola from 'consola';
import { get } from "lodash";

import { getFiles } from "./utils";

export default class InitManager {

    static app: Koa<Koa.DefaultState, Koa.DefaultContext>;

    static initCore(app: Koa) {
        InitManager.app = app;
        InitManager.initLoadRouters();
    }
    /**
   * 路由自动加载
   *
   * @static
   * @memberof InitManager
   */
    static initLoadRouters() {
        const path: string = `${process.cwd()}/dist/apiRoutes`;
        const files: string[] = getFiles(path);
        for (let file of files) {
            // 获取文件后缀名
            // const extention: string = file.substring(
            //     file.lastIndexOf("."),
            //     file.length
            // );
            // console.log(file)
            if (!file.endsWith('.js')) { 
                continue
            }
            // 加载api文件夹下所有文件
            // 并检测文件是否是koa的路由
            // 如果是路由便将路由加载
            const mod: Router = require(file).default;
            if (mod instanceof Router) {
                // consola.info(`loading a router instance from file: ${file}`);
                get(mod, "stack", []).forEach((ly: Router.Layer) => {
                    consola.info(`loading a route: ${get(ly, "path")}`);
                });
                InitManager.app.use(mod.routes()).use(mod.allowedMethods());
            }
           
        }
    }
}