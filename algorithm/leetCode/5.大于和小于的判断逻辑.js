let arry = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3]
function compareGreater(a,b){
	console.log(a>b)
	return  a > b;
}
function compareSmaller(a,b){
	console.log(a<b)
	return  a < b;
}

compareGreater(arry[0])//false
compareGreater(arry[0], NaN)//false


compareSmaller(arry[0])//false
compareSmaller(arry[0], NaN)//false