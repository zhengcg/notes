// 内置模块

// fs - 文件系统(注意文件和文件夹的区别)
const fs=require('fs');

// 监听文件
// 当文件发生改变时触发事件（热更新就是这玩意儿）
// fs.watchFile('./1.txt',data=>{
// 	console.log(data);

// })

// 监听目录和文件
fs.watch('./1.txt',(eventType,filename)=>{
	console.log(eventType,filename)
	// change 1.txt（更改）
	// rename 1.txt (删除或者新增)
})

// node v-10.0以上
// const fsPromises=require('fs').promises;

// fsPromises跟fs方法一样，只是返回promise对象，可以链式操作


