npm i typescript -D

默认文件以.ts为后缀

TypeScript是js的超集

// tsconfig.json
compilerOptions:编译相关设置
	module:指定编译后的代码要使用的模块化系统
	target:指定编译后的代码对应的ECMAScript版本
	outDir:指定编译后的代码文件输出目录
	outFile:将输出文件合并成一个文件（合并的文件顺序为加载和依赖顺序）
include:指定要包含的编译文件目录
	{
		"compilerOptions":{
			"module":"ES2015",
			"target":"es2017",
			"outDir":"./dist"
		},
		include:[
			"./src/*"  //包含src目录下的所有文件;**可以匹配目录，编译后会带目录
		]

	}


npm i ts-node  //更好用的ts编译（可以直接运行文件，不用编译后生成文件在运行）