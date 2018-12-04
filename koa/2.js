// koa-static-cache
//koa-router
const Koa = require('koa');
const koaStaticCache=require('koa-static-cache');
const koaRouter=require('koa-router');
const app = new Koa();
const router=new koaRouter();
// 只要有请求，则通过koaStaticCache 进行处理
app.use(koaStaticCache(__dirname+'/static',{
	//root:__dirname+'/static', //与第一个参数一样，可以不用写
	prefix:'/public',  //如果当前请求的url是以/public开始，则作为静态资源请求
}));

// 把路由对象挂在到app对象中
app.use(router.routes());

router.get('/',(ctx,next)=>{
	console.log('hello');
	ctx.body='hello';
})

// 路由嵌套
// 子路由
const userRouter=new koaRouter();
userRouter.get('/',(ctx,next)=>{
	ctx.body="用户首页"
})
router.use('/user',userRouter.routes());

// 基于前缀的路由
const itemRouter=new koaRouter({
	prefix:'/item'
})
itemRouter.get('/add',(ctx,next)=>{
	ctx.body='添加物品'
})

app.use(itemRouter.routes());


//路由重定向
// router.redirect('/admin','/user',301)//访问/admin时候定向到/user，状态吗为301

//url生成器
// console.log(koaRouter.url('/list',{page:1},{query:{order:'desc'}}))// /list/1?order=desc

app.listen(80)