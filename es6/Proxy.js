var proxy = new Proxy(target, handler);
// Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。
// 其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，
// handler参数也是一个对象，用来定制拦截行为。
// 注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是
// 针对目标对象（上例是空对象）进行操作。
var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35