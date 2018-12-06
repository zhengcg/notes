// 快速上手

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/text');

// Schema

let kittySchema = mongoose.Schema({
	name:String
})

// 在Schema上添加方法
kittySchema.methods.speak=function(){
	var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

// 加在 schema methods 属性的函数会编译到 Model 的 prototype， 也会暴露到每个 document 实例：
// Model

let Kitten = mongoose.model('Kitten',kittySchema);

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

// 每个 document 会在调用他的 save 方法后保存到数据库。 注意回调函数的第一个参数永远是 error 。
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

// 可以通过model方法获取所有数据或指定数据
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

Kitten.find({ name: /^fluff/ }, callback);




// 增删改查方法
