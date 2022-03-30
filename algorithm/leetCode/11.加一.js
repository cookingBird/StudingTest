function addNum(arr=[], num) {
	let carryBit = 0;
	let addBitIndex = arr.length-1;
	//相加位的值
	let addBitValue = arr[addBitIndex] + carryBit + num;
	//当前位置的值
	arr[addBitIndex] = addBitValue % 10;
	//进位值
	carryBit = Math.floor(addBitValue/10);
	//进位相加,从倒数第二位开始
	while(carryBit) {
		//记录前一位置
		let j = --addBitIndex
		//前一位值
		let value = arr[j] + carryBit;
		//根据前一位值，改变前一位值,确定进位值
		arr[j] = value % 10;
		carryBit = Math.floor(value/10);
	};
	// for(let i = arr.length -2; i >= -1; i--) {
	// 	if(i > -1) {
	// 		if(carryBitValue) { 
	// 			carryBit = carryBitValue;
	// 		} else { carryBit = 0;}
	// 	}else {
	// 		arr.unshift(carryBit);
	// 	}
	// }
	return arr;
};
console.log(addNum([7,8,9], 13));