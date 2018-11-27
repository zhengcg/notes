// 内置模块

// 一、Events
const EventEmmiter=require('events');

// demo1
const event1=new EventEmmiter();
event1.addListener("wo",function(){
	console.log("触发我事件了！")
});
setTimeout(function(){
	event1.emit("wo");
},2000)

// demo2
// class Person extends EventEmmiter {
// 	constructor(name){
// 		super()
// 		this.name=name;
// 		this.age=0;
// 		this.growup()
// 	}
// 	growup(){
// 		setInterval(()=>{
// 			this.age++;
// 			// 触发事件
// 			this.emit('growup');
// 		},1000)
// 	}

// }

// const p1=new Person('童斌');
// // 监听事件
// p1.addListener('growup',function(){
// 	console.log('长大了一岁');
// })