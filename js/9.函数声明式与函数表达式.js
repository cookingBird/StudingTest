function test() {
	let name = 'test'
	const test1 = function() {
		console.log("test1");
	}
	function test2() {
		console.log("test2");
	}
	// test1();
	// console.log(name)
	// test2();
};
// test();
const cat = {
	name: 'cat',
	attr: 'cut',
	say() {
		console.log('miao');
	},
	is() {
		console.log(
			this.attr
			);
	}
};
cat.say();
cat.is();

let dogIs = cat.is;
dogIs();
let a = 10;
let b = a;
console.log(b);
b = 20;
console.log(b);