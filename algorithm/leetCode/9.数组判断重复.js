function judgeRepeatArray(arr) {
	let newArr = arr;
	let noRepeat = [];
	let label = false;
	let i = 0;
	while(i < newArr.length) {
		if(!noRepeat.includes(newArr[i])) {
			noRepeat.push(newArr[i])
		}else {
			label = true;
			break;
		};
		i++;
		console.log(i);
	}
	return label;
}
console.log(judgeRepeatArray([1,2,3,4,5,6]));
console.log(judgeRepeatArray([1,2,3,4,5,6,1]));