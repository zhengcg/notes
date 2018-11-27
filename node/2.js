// 程序分为同步和异步
// 同步程序直接推入执行站
// 异步程序放到事件循环
// 事件循环顺序是先处理timer，io，轮询检查达到可立即执行的条件后会推入同步的执行站

// 执行站中的同步程序分为宏任务（script,定时器）和微任务（Promise.then,process.nextTick）；先执行宏任务，在执行微任务。
setTimeout(()=>{
	//宏任务(promise的then处理是微任务)
	new Promise(resolve=>{
		console.log('宏promise')
		resolve()
	}).then(()=>{
		// 微任务
		console.log('微promise')
	});
	// 宏任务
	console.log(1);
	// 宏任务（异步）
	setTimeout(()=>{
		console.log('timeout');
	},1000);
},1000);

// 执行结果打印顺序 宏promise=>1=>微promise=>timeout

// 宏任务微任务是针对执行站中的执行顺序说的，跟同步异步无关，
// 异步任务可能是宏任务，会被先推到eventloop(事件循环)中去