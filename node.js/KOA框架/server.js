const Koa = require('koa');        // 引入Koa构造函数
const router = require('koa-router')(); //引入并执行
const static = require('koa-static')    //
const app = new Koa();

// 引入中间件

app.use(static(__dirname +'/public'))
router.get('/',(ctx)=>{
    ctx.body = 'home page';
})
router.get('/else',(ctx)=>{
    ctx.body = 'else page';
})
app.use(router.routes());  // 将router引入到koa项目中去
app.use(async (ctx)=>{
    ctx.body = "hello koa"
})
app.listen(3000,()=>{
    console.log('server is running!');
})