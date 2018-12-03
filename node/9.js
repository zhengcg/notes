// NPM（node包管理器 Node Package Manager)https://www.npmjs.com

// 查看命令的使用方式如： npm install -h

// 1. npm search jquery

// 2. npm install jquery //默认下载到运行命令所在的目录
//    npm install jquery@2.2.4 //下载指定版本
//    npm i  //简写

// 3. npm ls //查看已安装的依赖包(当前项目)

// 4. npm update jquery //升级依赖包 也可以简写 npm up jquery

// 5.npm uninstall jquery  //删除包


// package.json
{
	"name":"miaov-shanghai",
	"version":"1.0.0",
	"description":"",
	"main":"1.js",
	"script":{
		"test":"echo \"Erroe:no test specified\" && exit 1",  //定义npm 可执行 的命
		"hello":"echo Hello Miaov"  //（npm run hello）
	},
	"keywords":[],
	"author":"",
	"license":"ISC",
	"dependencies":{ //项目依赖
		"jquery":"^3.3.1"
	},
	"devDependencies":{ //打包时候不会把这里面的东西打进去，这里可以放一些测试环境需要的东西

	}
}

// 6.npm init //创建一个package，会进入交互式填写信息，如果想生成默认的，就这样：npm init --yes


// 发布包到npm上
// 现在npm上注册

// 然后登陆
// npm login/npm adduser

// 发布
// npm publish