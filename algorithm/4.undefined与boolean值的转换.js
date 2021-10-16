// undefined转换为Boolean为false
// 
function test(i){
	console.log(i);
	console.log(!i);
	console.log(i && !i);
	console.log((i && !i));
	if(i && !i){
		console.log('true');
	}else{
		console.log('false')
	}
	++i;
	console.log(i);
	console.log(!i);
}
// test();
// undefined与number的比较
function compare(num1, num2){
	console.log([num1, num2])
	console.log('小于')
	console.log(num1 < num2);
	console.log('大于')
	console.log(num1 > num2);
}

compare(1,)
compare(2,)