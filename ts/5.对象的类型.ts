//***对象的类型——接口 */
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

// 什么是接口§
// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

// 简单的例子§
interface Person {
	name: string;
	age: number;
}

let tom: Person = {
	name: 'Tom',
	age: 25
};
//定义的变量比接口少了一些属性是不允许的：
let tom2: Person = {
	name: 'Tom'
};

// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
let tom3: Person = {
	name: 'Tom',
	age: 25,
	gender: 'male'
};

// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
//!  可见，赋值的时候，变量的形状必须和接口的形状保持一致。

//****可选属性

// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：

interface Person2 {
	name: string;
	age?: number;
}

let tom4: Person2 = {
	name: 'Tom'
};
let tom5: Person2 = {
	name: 'Tom',
	age: 25
};
//! 这时仍然不允许添加未定义的属性：
let tom6: Person2 = {
	name: 'Tom',
	age: 25,
	gender: 'male'//报错
};

// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.

//***********************************************任意属性
interface Person3 {
	name: string;
	age?: number;
	[propName: string]: any;
}

let tom7: Person3 = {
	name: 'Tom',
	gender: 'male'
};
// !一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person4 {
	name: string;
	age?: number; //报错age属性类型不是任意属性的类型的子类型
	[propName: string]: string;
}

let tom8: Person4 = {
	name: 'Tom',
	age: 25,
	gender: 'male'
};

// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
interface Person9 {
	name: string;
	age?: number;
	[propName: string]: string | number;
}

let tom9: Person9 = {
	name: 'Tom',
	age: 25,
	gender: 'male'
};
//***********************************************只读属性
interface Person11 {
	readonly id: number;
	name: string;
	age?: number;
	[propName: string]: any;
}

let tom11: Person11 = {
	id: 89757,
	name: 'Tom',
	gender: 'male'
};

tom.id = 9527;
// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
// !注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
interface Person12 {
	readonly id: number;
	name: string;
	age?: number;
	[propName: string]: any;
}

let tom12: Person12 = {//ERROR缺少id属性
	name: 'Tom',
	gender: 'male'
};

tom.id = 89757//id属性只读

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.