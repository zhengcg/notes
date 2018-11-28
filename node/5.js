// 内置模块

// process(不需要require引入)

// console.log(process)

// process.argv:用来获取当前运行node程序的相关参数（返回一个数组）
// node .\5.js -v
// if(process.argv.includes('-v')){
// 	console.log('v1.0.0');
// }

// console.log(process.env) //环境变量

// if(process.env.mode||process.env.mode=="dev"){
// 	console.log('开发模式')
// }else{
// 	console.log("生产模式")
// }


// process.exit();结束当前进程
// let i=0;
// setInterval(()=>{
// 	i++;
// 	console.log(i);
// 	if(i>10){
// 		process.exit()
// 	}
// },1000)


// process.stdout,process.stdin 标准输出输入流（可以做交互式命令行，可以结合fs模块使用）

// process.stdout.write('hello');
// process.stdin.on('data',(s)=>{
// 	console.log('用户输入',s.toString());
// })


// 可以用来做命令行扩展操作，例如一些第三方框架（vue脚手架等）



// Stream

// let stream=require('stream');

// Buffer 用来操作二进制数据的(全局的，不需要require)
let bf1=new Buffer(4);
console.log(bf1);