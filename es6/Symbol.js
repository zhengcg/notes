// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
// 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、
// null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

// Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原
// 来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都
// 是独一无二的，可以保证不会与其他属性名产生冲突。

// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显
// 示，或者转为字符串时，比较容易区分。

// 作为属性名写法
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};
// 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
// 不放在方括号中，该属性的键名就是字符串

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"


// Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
// 也不会被Object.keys()、Object.getOwnPropertyNames()、
// JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，
// 可以获取指定对象的所有 Symbol 属性名。

// Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

// 另一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]

// Symbol.for()，Symbol.keyFor()
// Symbol.for()与Symbol()区别
Symbol.for("bar") === Symbol.for("bar")
// true

Symbol("bar") === Symbol("bar")
// false

// Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined

// Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例。