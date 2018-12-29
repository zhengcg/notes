let path=require('path');
let p="../file/./dist";
// console.log(path.normalize(p))

//console.log(path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'))  // /test/test1/2slashes/1slash

// console.log(path.resolve("../dist"))

// console.log(path.extname('./disp/path.js'));
console.log(__dirname)
console.log(path.resolve(__dirname, 'dist'))