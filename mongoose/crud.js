const mongoose=require('mongoose');

const url="mongodb://localhost:27017/test"

mongoose.connect(url,{useNewUrlParser: true});

const UserSchema=new mongoose.Schema({
	name:String,
	age:Number,
	birthday:Date
});

const UserModel=mongoose.model('User',UserSchema);

// 增删改查操作

// 增加1

// UserModel.create({
// 	name:"张三",
// 	age:14,
// 	birthday:"2011-11-11"
// },(err,user)=>{
// 	if(!err){
// 		console.log(user);
// 	}
// })

// 增加2

// let user=new UserModel({
// 	name:"张三新增",
// 	age:131,
// 	birthday:"2018-12-06"
// });
// user.save((err,res)=>{
// 	if(!err){
// 		console.log(res);
// 	}
// })

// 删除

// 删除一条
// UserModel.deleteOne({name:"张三"},err=>{
// 	if(!err){
// 		console.log("删除成功！")
// 	}
// })

// 删除多条
// UserModel.deleteMany({age:15},err=>{
// 	if(!err){
// 		console.log("删除成功！")
// 	}
// })

// 修改

// 修改一条
// UserModel.updateOne({name:"李四"},{$set:{age:18}},err=>{
// 	if(!err){
// 		console.log("修改成功")
// 	}
// })

// 修改多条
// UserModel.updateMany({name:"张三"},{$set:{name:"李四"}},err=>{
// 	if(!err){
// 		console.log("修改成功")
// 	}
// })
// 根据id修改
// UserModel.findOneAndUpdate('5c08f362ae8dac1b84d9868c',{$set:{age:25}},err=>{
// 	if(!err){
// 		console.log("修改成功")
// 	}
// })
// 查询

// 1.基本查询

// UserModel.find((err,res)=>{
// 	if(!err){
// 		console.log(res);//返回一个数组
// 	}
// })

// 2.按条件查询
// UserModel.find({name:"修改张三"},(err,res)=>{
// 	if(!err){
// 		console.log(res);//返回一个数组
// 	}
// })

// 3.条件查询(属性过滤，即返回指定字段age)
// UserModel.find({name:"李四"},{age:13},(err,res)=>{
// 	if(!err){
// 		console.log(res);
// 	}
// })

// 4.查询一条数据，即只返回第一个符合条件的数据
// UserModel.findOne({name:"李四"},(err,res)=>{
// 	if(!err){
// 		console.log(res);
// 	}
// })

// 5.根据id查询，和findOne差不多，但只接受id
// UserModel.findById('5c08f1f54b8d5d1a98a20268',(err,res)=>{
// 	if(!err){
// 		console.log(res);
// 	}
// })

// 6.使用操作符
//熟悉一下"$lt"(小于)，"$lte"(小于等于),"$gt"(大于)，"$gte"(大于等于)，"$ne"(不等于)的使用：
// UserModel.find({age:{$gt:15}},(err,res)=>{
// 	if(!err){
// 		console.log(res);
// 	}
// })

// 和$ne操作符相反，$in相当于包含、等于，查询时查找包含于指定字段条件的数据。‘$nin’ "$in" 取反, 一个键不对应指定值，具体使用方法如下：

//查询年龄等于18的所有记录
// UserModel.find({age:{$in: 18}},function (error,doc) {
//     if (error){
//         console.error(error);
//     }else{
//         console.error("年龄为18的查询结果：",doc)
//     }
// });
 
//查询年龄等于18和19的所有记录
// UserModel.find({age:{"$in":[18,19]}},function (error,docs) {
//     if (error){
//         console.error(error);
//     }else{
//         console.error("年龄为18和19的查询结果：",docs)
//     }
// });
 
//查询年龄不等于18和19的所有记录
// UserModel.find({age:{"$nin":[18,19]}},function (error,docs) {
//     if (error){
//         console.error(error);
//     }else{
//         console.error("年龄不等于18和19的查询结果：",docs)
//     }
// })

//7.$Or或查询：

//查询年龄等于18或者名字为tiny所有记录
// UserModel.find({"$or": [{"name": "tiny"}, {"age": 18}]}, function (error, docs) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.error("$or查询结果：", docs)
//     }
// });
 
//查询年龄不等于18且名字不为tiny所有记录
// UserModel.find({"$nor": [{"name": "tiny"}, {"age": 18}]}, function (error, docs) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.error("$nor查询结果：", docs)
//     }
// });

// 8.exist查询：

//查询所有存在name属性的文档
// UserModel.find({name: {$exists: true}}, function (error, docs) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.error("exists查询结果：", docs)
//     }
// })

