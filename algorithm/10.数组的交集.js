function arraysMixed(arr1 = [], arr2 = []) {
	let result = [];
	let newArr1 = arr1;
	let newArr2 = arr2;
	if(newArr1.length >= newArr2.length){
		newArr2.forEach(item2 => {
			newArr1.forEach(item1 => {
				if(item1 === item2) {
					result.push(item1);
				}
			})
		})
	}else {
		newArr1.forEach(item1 => {
			newArr2.forEach(item2 => {
				if(item1 === item2) {
					result.push(item1);
				}
			})
		})
	}
	return result;
}

console.log(arraysMixed([1,2,3,4,5,6], [4,5,6]));