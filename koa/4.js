// MySQL

// 记住mac下安装不要装带vm的
// 设置跨域有关的头信息
app.use(async (ctx,next)=>{
	ctx.set('Access-Control-Allow-Origin','*');
	await next();
})
