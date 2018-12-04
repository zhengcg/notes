const Koa = require('koa');
const koaStaticCache=require('koa-static-cache');
const Router=require('koa-router');
const Swig=require('koa-swig');
const co=require('co');
const bodyParser=require('koa-bodyparser');
const app=new Koa();
const router=new Router();
app.use(koaStaticCache(__dirname+'/static',{
	//root:__dirname+'/static', //与第一个参数一样，可以不用写
	prefix:'/public',  //如果当前请求的url是以/public开始，则作为静态资源请求
}));
const render=new Swig({
	root:__dirname+'/views',//模板存放目录
	autoescape:true,
	cache:false,//是否启用缓存
	ext:'.html'
});
app.context.render=co.wrap(render);
app.use(bodyParser());  //ctx.request.body
router.get('/',async (ctx,next)=>{
	ctx.body=await ctx.render('index.html',{title:'渲染',user:[1,2,3,4,5]})
});
router.get('/user',(ctx,next)=>{
	ctx.body=[1,2,3,4,5,6]
});
app.use(router.routes());
app.listen(80,()=>{
	console.log("node服务启动成功")
})