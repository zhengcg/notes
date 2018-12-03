const dgram=require('dgram');
const socket = new dgram.Socket('udp4'); //或者 const socket=dgram.createSocket('udp4'); udp4代表的ipv4

// 发送数据
// udp，无连接协议，不需要连接到服务器，然后在发数据
// 感觉跟websocket挺像，websocket就是它的web端实现

socket.send('hello',12345,'127.0.0.1', ()=>{
	console.log("数据已发送")
})