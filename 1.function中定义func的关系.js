function test(a){
    console.log('test'+ a)
    function show(b){
        console.log('show'+ b)
    }
    show()
    console.dir(show)
    console.dir(test)
}
test()
console.dir(test)
console.dir(show)