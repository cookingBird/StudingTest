//***泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。 */
function createArray<T>(length: number, value: T): Array<T> {
	let result: T[] = [];
	for (let i = 0; i < length; i++) {
			result[i] = value;
	}
	return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']
//也可以不手动指定，而让类型推论自动推算出来
//createArray(3, 'x'); // ['x', 'x', 'x']


//?定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

//**********************泛型约束
//?在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
function loggingIdentity<T>(arg: T): T {
	console.log(arg.length);//error TS2339: Property 'length' does not exist on type 'T'.
	return arg;
}
//*约束后
interface Lengthwise {
	length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}
//我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
//此时如果调用 loggingIdentity 的时候，传入的 arg 不包含 length，那么在编译阶段就会报错了：
interface Lengthwise {
	length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}

loggingIdentity3(7);//error TS2345: Argument of type '7' is not assignable to parameter of type 'Lengthwise'.
