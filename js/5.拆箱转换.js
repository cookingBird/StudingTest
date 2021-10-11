/******拆箱转换
* String和Number的转换都遵循‘先拆箱再转换’的规则
* 通过拆箱转换，把对象转换为基本类型，再从基本类型转换为String或Number
*
*/

var o = {
	valueOf:()=>{console.log('valueOf'); return {}},
	toString:()=>{console.log('toString'); return {}}
}
// o*2
//*对象类型到基本类型的转换（即，拆箱转换）
//valueOf
//toString
//TypeError

var b = {
	valueOf:()=>{console.log('valueOf'); return {}},
	toString:()=>{console.log('toString'); return {}}
}
// String(o)
//!会优先调用toString
//toString
//valueOf
//TypeError

var j = {
	valueOf:()=>{console.log('valueOf'); return {}},
	toString:()=>{console.log('toString'); return {}}
}
j[Symbol.toPrimitive] = () => { console.log('toPrimitive'); return 'hello'}
console.log(j + '')
//!ES6之后通过显示指定@@toPrimitive Symbol来覆盖原有的行为
//toPrimitive
//hello