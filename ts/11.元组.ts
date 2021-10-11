let tom: [string, number] = ['Tom', 25];
//或者
let tom2: [string, number];
tom2[0] = 'Tom';
tom2[1] = 25;

tom2[0].slice(1);
tom2[1].toFixed(2);
//也可以只赋值一项
let tom3: [string, number];
tom3[0] = 'Tom';
//!但是，当直接都元组类型的变量进行初始化或者赋值的时候，需要提供元组中所有项的值
let tom4: [string, number];
tom4 = ['Tom'];//报错