import koa from 'koa';
import bodyparser from 'koa-bodyparser';

// import router from './apiRoutes/user/index';
import InitManager from './core/init';

const app = new koa();

app.use(bodyparser());
// app.use(router.routes());
InitManager.initCore(app)




app.listen(3000)
console.log('this sever start up :3000')