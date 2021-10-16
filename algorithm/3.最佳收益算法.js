// @ts-nocheck

// const conditionJudge = function(arr, i, type, currentCyle){
// 	let j = i;
// 	let k = ++i;
// 	let g = ++i;
// 	if( i < (arr.length-2)){
// 		if((arr[j]<arr[k] && arr[k]<arr[g])){ type = 'UP_TO_UP'; currentCyle = arr.slice(i, i+2)};
// 		if((arr[j]<arr[k] && arr[k]>arr[g])){ type = 'UP_TO_DOWN'; currentCyle = arr.slice(i, i+2)};
// 		if((arr[j]>arr[k] && arr[k]<arr[g])){ type = 'DOWN_TO_UP'; currentCyle = arr.slice(i, i+2)}
// 	};
// 	if( i === (arr.length-2)){
// 		if((arr[j]<arr[++j] && arr[j]<arr[++j]) || (arr[k]<arr[++k] && !arr[k]) || ()){
// 			return true;
// 		};
// 		if(){
// 			return false;
// 		}
// 	};
// 	if( i === --arr.length){
// 		if((arr[j]<arr[++j] && arr[j]<arr[++j]) || (arr[k]<arr[++k] && !arr[k]) || ()){
// 			return true;
// 		};
// 		if(){
// 			return false;
// 		}
// 	};
	
// }
function calcProfit(arr){
	let l = arr.length;
	return arr[l-1] - arr[0]
}

const maxProfit = function (records){
	let holdShare = [];
	let currentProfit = 0;
	let type = null;
	for(let i=0; i<records.length; i++){
		let j=i;
		let k=i;
		if(records[j]<records[++j]){
			type = 'BUYED';
			holdShare.push(records[i])
			console.log('小于')
		};
		if(records[k]>records[++k]){
				console.log('大于')
				holdShare.push(records[i])
				currentProfit += calcProfit(holdShare)
				holdShare = [];
				type = 'SELLED';
		};
		if( i === records.length-1){
			if(type === 'BUYED'){
				holdShare.push(records[i])
			}
		};
	};
	currentProfit += calcProfit(holdShare);
	return currentProfit;
}
arry = [1,2,3,4,5,8,4,3,2,7]
// console.log(calcProfit([]) + 1)
console.log(maxProfit(arry))