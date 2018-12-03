// 官网 https://koa.bootcss.com

const Koa=require('koa');

// 创建一个http服务器，监听请求,类似于http.createServer()

const app=new Koa();

app.use((ctx,next)=>{
	ctx.body = 'Hello Koa';
})

app.listen(80);


koa提供一些好用的API

Application
就是new Koa()所得到的实例对象

1、app.use(callback)
callback接受两个参数：ctx和next
	.state:用户数据存储空间
	.app:当前应用实例Application对象
	.throw(400,'err对象')
	.request
	.response
	.redirect
	.attachment('a.txt')//附件，前端请求直接下载a.txt

也可以是异步的

app.use(async (ctx,next)=>{
	// await db.find(异步任务)
})

2、app.on('error',err=>{})

监听错误



// koa内容很少，主要依赖中间件(koa生态)

koa-static-cache:静态文件袋里服务
koa-router:路由
koa-swig:模板引擎
koa-bodyparser:body解析
koa-multer:formData解析