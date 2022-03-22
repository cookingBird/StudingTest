function test() {
	let name = 'test';
	this.name = 'test';
	let alias = '1111';
	console.log(name);
	console.log(alias);
}
let t = new test();

