const net = require('net');

const server=net.createServer();
server.on('connection',socket=>{
	console.log("有人链接了");
	socket.write('hello');
})

server.listen(12345,'127.0.0.1')