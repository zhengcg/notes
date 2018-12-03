// ls
// 输出当前目录中的文件和文件夹

const commander=require('commander');
const fs=require('fs');
commander.version('v1.0.0','-v,--version');

const subCommander=commander.command(' <path>');

// 实现命令的具体逻辑
commander.action(()=>{
	// 把当前命令指定的目录下的文件夹以及文件全部显示在控制台中
	try{
		const files=fs.readdirSync(__dirname);
		console.log(files)

	}catch(e){
		console.log(e)
	}
	
})

commander.parse(process.argv)