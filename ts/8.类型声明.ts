//***类型声明 */
//?全局变量声明
declare let jQuery: (selector: string) => any;
jQuery('#foo');
// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
jQuery = function(selector) {
    return document.querySelector(selector);
};
//!而当我们使用 const 定义时，表示此时的全局变量是一个常量，不允许再去修改它的值了
declare const jQuery2: (selector: string) => any;

jQuery2('#foo');
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
jQuery2 = function(selector) {
    return document.querySelector(selector);
};
// ERROR: Cannot assign to 'jQuery' because it is a constant or a read-only property.
//?全局函数类型声明
declare function jQuery3(selector: string): any;

//?全局类类型声明
declare class Animal {
	name: string;
	constructor(name: string);
	sayHi(): string;
}

//!同样的，declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 sayHi 方法的具体实现则会报错：
declare class Animal2 {
	name: string;
	constructor(name: string);
	sayHi() { //报错
			return `My name is ${this.name}`;
	};
	// ERROR: An implementation cannot be declared in ambient contexts.
}