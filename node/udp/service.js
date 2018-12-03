const dgram=require('dgram');
const socket = new dgram.Socket('udp4'); //或者 const socket=dgram.createSocket('udp4'); udp4代表的ipv4
socket.on('listening',()=>{
	console.log("启动监听，等待数据接收");
})
socket.on('message',data=>{
	console.log("接收到的数据： ",data);
})
socket.bind(12345,'127.0.0.1'); //绑定ip和端口

socket事件：close、error、listening、message、