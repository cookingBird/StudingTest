//***函数的类型
//函数声明式
// function sum(x: number, y: number): number {
// 	return x + y;
// }
// //!过多或过少的字符都是不行的
// sum(1, 2, 3) //报错
// sum(1) //报错


//函数表达式
let mySum = function (x: number, y: number): number {
	return x + y;
};
//事实上，上面的表达式只是对等号右边的式子进行了类型定义
//而等号左边的类型是根据赋值操作进行类型推论而推断出来的
//如果我们需要手动添加mySum的类型，则：
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
	return x + y;
};
//!在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。


//用接口定义函数的形状
interface SearchFunc {
	(source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	return source.search(subString) !== -1;
}


//***可选参数 */
function buildName(firstName: string, lastName?: string) {
	if (lastName) {
			return firstName + ' ' + lastName;
	} else {
			return firstName;
	}
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
//!可选参数后面不允许再出现必需参数了
// function buildName(firstName?: string, lastName: string) { //!报错
// 	if (firstName) {
// 			return firstName + ' ' + lastName;
// 	} else {
// 			return lastName;
// 	}
// }

//***参数默认值 */
//TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName2(firstName: string, lastName: string = 'Cat') {
	return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');

//TypeScript 不受「可选参数必须接在必需参数后面」的限制
function buildName3(firstName: string = 'Tom', lastName: string) {
	return firstName + ' ' + lastName;
}
let tomcat3 = buildName3('Tom', 'Cat');
let cat = buildName3(undefined, 'Cat');

//***剩余参数 */
//事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array: any[], ...items: any[]) {
	items.forEach(function(item) {
			array.push(item);
	});
}

let a = [];
push(a, 1, 2, 3);
//!注意，rest 参数只能是最后一个参数