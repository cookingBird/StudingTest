function bubleSort(arr){
	let arry = arr;
	let temp = null;
	console.log(arry)
	for(let i = 0; i < arry.length; i++){
		for(let j = 0; j < arry.length - i; j++){
			// console.log(i, j)
			if(arry[j] < arry[j+1]){
				temp = arry[j];
				arry[j] = arry[j+1];
				arry[j+1] = temp 
			}
		}
	}
	return arry
}
let arr = [1, 3, 5, 10, 20, 50, 6, 9, 10]
console.log(bubleSort(arr))
// var arr=[9,8,7,6,5,4];

// for (var i = 0; i < arr.length; i++) {//控制比较的轮数
// 	 //每一轮比较的次数元素的个数减去当前是第几轮
// 	 for (var j = 0; j < arr.length-i-1; j++) {
// 			 if(arr[j]>arr[j+1])
// 			 {
// 						var swap=arr[j];
// 						arr[j]=arr[j+1];
// 						arr[j+1]=swap;
// 			 }
// 	 } 
// }
// console.log(arr)