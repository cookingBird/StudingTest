function exeCallback(cb){
	let name = 'exeCallback'
	console.log(`this is ${name}`);
	let callbackName = 'callback'
	cb(callbackName);
};
function test() {
	function inner() {
		let name = 'inner';
		console.log(name);
	};
	let name = 'test';
	console.log(`this is ${name}`);
	exeCallback((e) => {
		console.log(e);
		console.log(this);
	});
	inner()
}
test();
/**
 * 箭头函数中的this默认指向undefined
 * 以function声明的函数中，this默认指向global
 */