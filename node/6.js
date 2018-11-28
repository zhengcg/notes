// 内置模块

// fs - 文件系统(注意文件和文件夹的区别)
const fs=require('fs');

//write

// 1.写入数据到文件
// input/output => i/o 操作 => 流 二进制 => buffer
// fs.writeFile(file,data[可选],callback)
// file:文件名（包含目录）
// data:要写入文件的数据
//如果文件不存在，则创建，否则直接写入
//如果文件目录不存在，则创建失败


// fs.writeFile('./1.txt','Hello',err=>{
// 	if(err) throw err;
// 	console.log("文件以保存")
// })


// 向文件追加


// fs.appendFile('./1.txt','追加',err=>{
// 	if(err) throw err;
// 	console.log("文件以保存")
// })


// 读文件


// fs.readFile('./1.txt',(err,data)=>{
// 	if(err) throw err;
// 	console.log(data.toString())

// })


// 获取文件相关信息


// fs.stat('./1.txt',(err,info)=>{
// 	if(err) throw err;
// 	console.log(info)
// 	/*Stats {
// 	  dev: 1828076444, 
// 	  mode: 33206,
// 	  nlink: 1,
// 	  uid: 0,
// 	  gid: 0,
// 	  rdev: 0,
// 	  blksize: undefined,
// 	  ino: 20266198323352308,
// 	  size: 6,
// 	  blocks: undefined,
// 	  atimeMs: 1543392631910.126,
// 	  mtimeMs: 1543392631911.124,
// 	  ctimeMs: 1543392631911.124,
// 	  birthtimeMs: 1543392631910.126,
// 	  atime: 2018-11-28T08:10:31.910Z,
// 	  mtime: 2018-11-28T08:10:31.911Z,
// 	  ctime: 2018-11-28T08:10:31.911Z,
// 	  birthtime: 2018-11-28T08:10:31.910Z 
// 	}*/
// 	console.log(info.isFile()) //判断是否是文件
	// info.isDirectory()//判断是否是文件夹
// })


// 删除文件


// fs.unlink('./1.txt',err=>{
// 	if(err) throw err;
// 	console.log("删除成功")
// })



// 文件夹相关操作

// 创建文件夹(不会进行递归创建，如./a/b/c,如果文件已存在也会报错)

// fs.mkdir('./b',err=>{
// 	if(err) throw err;
// 	console.log("创建成功")
// })

// 删除文件夹(不能删除非空文件夹)

// fs.rmdir('./b',err=>{
// 	if(err) throw err;
// 	console.log("删除成功")
// })


// 读文件夹（操作删除非空文件夹）
fs.readdir('./b',(err1,files)=>{
	if(err1) throw err1;
	// files是一个文件数组
	files.forEach(child=>{
		fs.stat('./b/'+child,(err,info)=>{
			if(err) throw err;
			//判断是否是文件夹
			if(info.isDirectory()){
				// 递归调用readdir

			}else{
				fs.unlink('./b/'+child,error=>{
					if(error) throw error;
				});
			}

		})
		
	});

	fs.rmdir('./b',err2=>{
		if(err2) throw err2;
		console.log("删除成功,连文件夹带里边的文件")
	})
})