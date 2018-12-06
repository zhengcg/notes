// 允许使用的 SchemaTypes 有:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array


// 实例方法
// documents 是 Models 的实例。 Document 有很多自带的实例方法， 当然也可以自定义我们自己的方法。
  var animalSchema = new Schema({ name: String, type: String });
  animalSchema.methods.findSimilarTypes = function(cb) {
    return this.model('Animal').find({ type: this.type }, cb);
  };
 // 不要在自定义方法中使用 ES6 箭头函数，会造成 this 指向错误。


 // 静态方法（static）

 animalSchema.statics.findByName = function(name, cb) {
    return this.find({ name: new RegExp(name, 'i') }, cb);
  };

  var Animal = mongoose.model('Animal', animalSchema);
  Animal.findByName('fido', function(err, animals) {
    console.log(animals);
  });



  // 个人理解，就如同类一样，有实例方法和静态方法，model就是类，document就是对象
  // 添加实例方法document可以直接调用，添加静态方法model可以调用
  // 添加方法都是通过schema来实现
  // 静态方法:
  // schema.statics.fnName=function(n,cb){
  // 	return this.find({},cb)
  // }
  // 实例方法
  // schema.methods.fnName=function(cb){
  // 	return this.model('model').find({ type: this.type }, cb);
  // }