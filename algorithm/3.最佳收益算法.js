// @ts-ignore

const conditionJudge = function(arr, i){
	let j = i;
	let k = ++i;
	let g = ++i;
	if( i < (arr.length-2)){
		if((arr[j]<arr[k] && arr[k]<arr[g])){}
	};
	if( i === (arr.length-2)){
		if((arr[j]<arr[++j] && arr[j]<arr[++j]) || (arr[k]<arr[++k] && !arr[k]) || ()){
			return true;
		};
		if(){
			return false;
		}
	};
	if( i === --arr.length){
		if((arr[j]<arr[++j] && arr[j]<arr[++j]) || (arr[k]<arr[++k] && !arr[k]) || ()){
			return true;
		};
		if(){
			return false;
		}
	};
	
}
const maxProfit = function (records){
	let holdShare = null;
	let currentProfit = null;
	for(let i=0; 
			conditionJudge(records,i);
			i++){
				holdShare = records[i]
	};
	for(let i=0; 
		(function(){let j=i; if(records[j]<records[++j] && records[j]>records[++j]){return true;}})();
		i++){
			holdShare = records[i]
};

}

