声明变量时候指定类型
let s: string = "miaovi";

类型大小写区分，小写是基本类型，大写是包装对象类型
let a: string ='miaov';  //没问题
let b: String ='miaov';  //也没问题
let c: String = new String('miaov'); //没问题
let d:string = new String('miaov');  //这个不行


// 数组

基本语法

let list:number[];//数组里存的是number;

泛型语法

let list: Array<number>;

// 定义一个可以拥有不同类型的数组(元组)
let list: [number,string,boolean];

// 注意：顺序要对应,对于超出部分，采用联合类型（就是或），即只要是上面定义类型的一种即可

联合类型：(或的关系)

let a: string|number;

交叉类型：(并且的关系，后面讲泛型的时候可以演示)

let a: string&number