export default function () {
  console.log('foo');
}

//* 正确
export var a = 1;

//* 正确
var a = 1;
export default a;

//!错误
//! export default var a = 1;


//* 正确
//* 因为export default命令的本质是将后面的值，赋给default变量
//* 所以可以直接将一个值写在export default之后。
export default 42;

//!报错
//! export 42;
//? 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样
import _, { each, forEach } from 'lodash';