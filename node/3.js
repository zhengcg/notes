// node模块加载采用同步模式（require函数导入、exports函数导出）
// 一个文件就是一个独立的模块，每个模块都有自己的独立作用域（模块作用域）
// node全局对象是global

// node.js实现这套模块系统方案（一个文件就是一个模块，有模块作用域，导入导出规则）
// 规范：CMD(来源于commonjs)

// 每个模块都有一个内置对象，module，包含如下属性：
// {
// 	id:当前模块的唯一标识，默认为当前文件的绝对路径,
// 	filename:当前模块的文件路径,
// 	parent:是一个模块,
// 	children:一个模块,
// 	loaded:模块是否加载完成
// 	……
// }

// require真正获取到的是module.exports


// 模块分类：
// 一.文件模块
// 	自己写的js文件
// 二.文件夹模块
// 	当导入的模块名称是一个文件夹的时候
// 	1.赌球该文件夹下的package.json文件
// 	2.导入package.json文件中main选项指定的问件
// 	3.如果没有package.json或者main指定的文件，默认导入index.js

// 	node_modules:如果我们导入的模块在node_modules目录下，直接写文件名就行，不用加路径

// 三.核心模块（核心模块优先级最高）



// 非路径加载模块：require("XXX"),没有./或者../等
// module对象的paths属性是一个数组，里面保存非路径加载模块的机制，会一层一
// 层的向上级目录寻找node_modules目录


// 如果node中想用es6模块化系统需要注意以下两点(export import)
// 1.文件要改成.mjs
// 2.运行时如下 node --experimental-modules xxx.mjs

