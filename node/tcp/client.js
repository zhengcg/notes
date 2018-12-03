const net = require('net');

const socket = new net.createConnection(12345,'127.0.0.1')
socket.on('data',data=>{
	console.log("服务端跟我说 ",data.toString())
})