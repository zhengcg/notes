const commander=require('commander');

//设置当前命令的版本信息,第二个参数可以不写，不写默认是-V和--version()

commander.version('v1.0.0','-v,--version');

//设置其他option
// <>必填参数，[]可选参数,
// 如果第三个参数是一个函数的话，那么该函数会接受来自用户输入的值
// 并返回一个值作为最后这个选项实际的值
commander.option('-n,--name [val]','设置名称','zmouse')


// 设置命令动作
commander.action(()=>{
	console.log('hello ' +commander.name)  //node app -n ssss  =>hello sss
})


// 添加子命令
let createCommander=commander.command('create','创建子命令');
createCommander.action(a=>{
	console.log("我是create子命令",a)  //node app create
})

// 解析来自process.argv上的数据,会自动的帮助我们添加一个-h的解析
commander.parse(process.argv);

