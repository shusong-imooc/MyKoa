/*
 * @Author: MuRong
 * @Date: 2020-02-19 15:27:35
 * @LastEditors: MuRong
 * @LastEditTime: 2020-02-26 19:17:58
 * @Description:
 * @FilePath: \koa-typescript-cms\src\app\api\v1\users.ts
 */
import koa from 'koa'
import Router from "koa-router";
import BookController from '../../controller/bookController/index';

const router: Router = new Router()
router.prefix('/book')

// 用户注册
router.post('/regist', async (ctx:koa.BaseContext) => {

})

// 用户登陆
router.post('/login', async (ctx:koa.BaseContext) => {

})

// 获取用户 列表
router.get('/list', async (ctx:koa.BaseContext) => {
    const data = await BookController.getList();
    ctx.body = {
        key: data
    }
})

export default router;