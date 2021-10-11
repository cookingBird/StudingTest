//*************数组的类型 */
// 最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
// fibonacci.push('8');

// Argument of type '"8"' is not assignable to parameter of type 'number'.
//************数组泛型 */
let fibonacci2: Array<number|string> = [1, 1, 2, 3, 5,'a'];
let fibonacci3: Array<number> = [1, 1, 2, 3, 5];
let fibonacci4: Array<object> = [{}];
//***用接口表示数组
interface NumberArray {
	[index: number]: number;
}
let fibonacci5: NumberArray = [1, 1, 2, 3, 5];
