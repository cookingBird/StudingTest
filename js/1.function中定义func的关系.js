/*
    运行时定义在函数中的函数会已变量的方式存在于所在位置的函数作用域中
*/

function test (a) {
    console.log('test' + a)
    function show (b) {
        console.log('show' + b)
    }
    show()
    console.dir(show)
    console.dir(test)
}
test()
console.dir(test)
console.dir(show)

