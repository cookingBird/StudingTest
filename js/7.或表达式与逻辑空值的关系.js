// ||表达式对false、''、NaN、0等逻辑空值也会生效
var b1 = false
var o1 = b1 || 10
console.log(o1)//10

var b2 = ''
var o2 = b2 || 10
console.log(o2)//10

var b3 = NaN
var o3 = b3 || 10
console.log(o3)//10

var b4 = 0
var o4 = b4 || 10
console.log(o4)//10


//使false、''、NaN、0等逻辑空值不生效的办法
var a1 = false
var f1= a1 !== null && a1 !== void 0 ? a1 : 10
console.log(f1)

var a2 = ''
var f2 = a2 !== null && a2 !== void 0 ? a2 : 10
console.log(f2)

var a3 = NaN
var f3 = a3 !== null && a3 !== void 0 ? a3 : 10
console.log(f3)

var a4 = 0
var f4 = a4 !== null && a4 !== void 0 ? a4 : 10
console.log(f4)