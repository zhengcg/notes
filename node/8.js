// 脚手架雏形
//node 8 app -i
const fs=require('fs');

let appName=process.argv[2];
let appRoot=__dirname+'/'+appName
if(fs.existsSync(appRoot)){
	console.log("文件目录已经存在")
	process.exit()
}
fs.mkdir(appRoot,err=>{
	if(err) throw err;
	if(process.argv.includes('-i')){
		fs.writeFile(appRoot+'/index.html','html',error=>{
			if(error) throw error;
		})
	}
	console.log("创建成功");

})