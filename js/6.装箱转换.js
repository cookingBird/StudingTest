/*
****** 装箱转换
** 就是把基本类型转换为对应的对象
*/
//1.利用call装箱转换，生成一个Symbol对象（Symbol对象不能new产生）

var symbolObject = (function() {return this;}).call(Symbol('a'));
console.log(typeof symbolObject) //object
console.log(symbolObject instanceof Symbol) //true
console.log(symbolObject.constructor == Symbol) //true



//2.利用内置的Object函数，实现装箱
var symbolObject2 = Object(Symbol('a'))
console.log(typeof symbolObject2) //object
console.log(symbolObject2 instanceof Symbol) //true
console.log(symbolObject2.constructor == Symbol) //true


//! 在javaScript中没有任何方法可以更改私有的class属性
//! 因此Obejct.prototype.toString可以准确识别对象的基本类型方法，它比instanceof更准确
//! 但是 call本身会产生装箱操作，所以还需要配合typeof来区分是对象类型还是基本类型
//? 
var symbolObject3 = Object(Symbol('A'))
console.log(Object.prototype.toString.call(symbolObject3))//[object symbol]