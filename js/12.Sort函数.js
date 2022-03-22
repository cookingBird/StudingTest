var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {//a为后一个元素
	console.log(a);
	console.log(b);
	//返回-1则交换元素，返回1则不交换元素
	if(a < b) {
		return 1;
	}else {
		return -1;
	}
});
console.log(numbers);