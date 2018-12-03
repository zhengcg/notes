// fetch  可以无需其他库就能实现Ajax
https://www.cnblogs.com/libin-1/p/6853677.html

1、获取数据
fetch('https://api.github.com/users/chriscoyier/repos');
fetch会返回promise
fetch('https://api.github.com/users/chriscoyier/repos')
  .then(response => {/* do something */})
如果这是你第一次遇见Fetch，也许惊讶于Fetch返回的response。如果console.log返回的response，会得到下列信息：

{
  body: ReadableStream
  bodyUsed: false
  headers: Headers
  ok : true
  redirected : false
  status : 200
  statusText : "OK"
  type : "cors"
  url : "http://some-website.com/some-url"
  __proto__ : Response
}

fetch('https://api.github.com/users/chriscoyier/repos')
  .then(response => response.json())
  .then(data => {
    // data就是我们请求的repos
    console.log(data)
  });

2、发送数据

let content = {some: 'content'};

// The actual fetch request
fetch('some-url', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(content)
})
// .then()...