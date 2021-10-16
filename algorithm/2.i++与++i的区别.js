// @ts-nocheck
let arr = [1,1,1,1, 2, 2, 2, 3, 4]
let i = 3;
console.log(i)
console.log(arr[i] === arr[i+1])//false
console.log(i)
console.log(arr[i] === arr[i++])//true
console.log(i)
i--;
console.log(i)
console.log(arr[i] === arr[++i])
console.log(i)

function testError(nums){
  for(let i=0; i< nums.length;i++){
    let j = i;
    if(nums[j]===nums[j++]){
      nums.splice(i,1,`${nums[i]+'changed'}`)
    }
  }
  console.log(nums)
  return nums;
}
testError(arr)