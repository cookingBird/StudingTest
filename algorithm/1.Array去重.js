// @ts-nocheck
let arr = [1,1,1,1, 2, 2, 2, 3, 4]
let i = 3;

function removeDuplicates(arry){
	for(let i=0;  i < arry.length;
    (function(){
      if(
        (function(k){ return arry[k]===arry[++k]}
        )(i)){
          return i;} else {
            return  i++;}}
    )())
    {
      (function(j){
        // let j = i;
        if(arry[j]==arry[++j]) { arry.splice(--j,1) }
      })(i)
    }
  return arry;
}
console.log(removeDuplicates(arr))
