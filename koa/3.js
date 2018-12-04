// koa-swig模板引擎
const Koa = require('koa');
const Swig = require('koa-swig');
const co=require('co');
const app = new Koa();
const render=Swig({
	root:__dirname+'/views',//模板存放目录
	autoescape:true,//是否编码，主要用于安全性的，如注入性攻击，加一段html到内容
	cache:false,//是否启用缓存 启用缓存是memory(数据变量会变，模板内容缓存)
	ext:'.html'
})

app.context.render=co.wrap(render);
app.use(async (ctx,next)=>{
	ctx.body=await ctx.render('list.html',{
		title:'模板',
		list:[1,2,3,4,5]
	})
})

//模板语法
// 变量：{{i}}
// 语句：{% for i in list %} <div>{{i}}</div>{% endfor %}
//       {% if 条件 %}{% endif %}
//       {% if 条件 %}{% elseif 条件 %}{% endif %}
// 		 {% if 条件 %}{%else%}{%endif%}

// 临时变量：{% set name = 'done' %}

