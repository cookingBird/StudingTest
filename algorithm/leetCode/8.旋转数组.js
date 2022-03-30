/**
 * 方法一
 * 
 * @function reCycleArryNormal = (arr:number[], k:number) => number[] - 把一个数组旋转k次并返回xin的数组
 * 
 * 思路：从素组最后一个开始向前遍历，
 * 把最后一个元素单独保存，
 * 中间的元素分别向前位移一位，
 * 第一个元素等于最后一个元素
 */

function reCycleArryNormal(arr, k) {
	let tail = undefined;
	//根据参数进行K次循环
	for(let i = 0; i < k; i++){
		//一次单独循换
		for(let j = arr.length - 1; j > 0; j--){
			//把每次循环的首个循环数据（即数组的最后一个元素）单独保存为tail
			if(j === arr.length - 1){ tail = arr[arr.length - 1]};
			if( j !== 0){
				arr[j] = arr[j-1];
				console.log(arr)
			}
			//把每次循环的最后一次交换的元素（即数组的第一个元素）直接设置为tail
			if(j === 0){ arr[0] = tail }
		}
	}
	return arr
}
/**
 * 方法二
 * 
 * @function reCycleArryNew = (arr:number[], k:number) => number[] - 把一个数组旋转k次并返回新的数组
 * 
 * 思路：从数组最后一个元素开始遍历，
 * 依次与前一个元素交换位置，
 * 没完成一次遍历交换操作，数组旋转一个次
 */
function reCycleArryNew(arr, k){
	let temp = 0;
	for(let i = 0; i < k; i++){
		for(let j = arr.length - 1; j > 0; j--){
			temp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = temp;
			console.log(arr);
		}
	}
	return arr
}

let arry = [ 1, 2, 3, 4, 5];

console.log(arry)
console.log(reCycleArryNew(arry, 1));
// console.log(reCycleArryNormal(arry, 1));