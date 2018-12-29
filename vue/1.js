Vue CLI3
npm install -g @vue/cli

vue create my-project
# OR
vue ui

// 在根目录下新建vue.config.js文件

1.配置代理

module.exports={
	devServer:{
		proxy:{
			'/api':{
				target:'http://127.0.0.1',
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			},
			// 可以设置多个
			'/foo':{
				target:'http://127.0.0.1',
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			}

		}
	}
}