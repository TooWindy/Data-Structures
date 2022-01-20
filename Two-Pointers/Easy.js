// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

function targetSumPair(array, target){
  let pointerStart = 0
  let pointerEnd = array.length -1
  let sum =0

  for(let i=0;i<array.length;i++){
     sum = array[pointerStart] + array[pointerEnd]
     if(sum === target){
       return [pointerStart, pointerEnd]
     }

     if(sum > target){
       pointerEnd --
     }
     else{
       pointerStart++
     }
  }
  return "Pair doesn't exist."
}

console.log(`Indices of pairs that equal target --- ${targetSumPair([2, 5, 9, 11], 11)}`)

//Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

function duplicates(array){
  let nonNextDuplicate = 1

  for(let i=0;i<array.length;i++){
    if(array[nonNextDuplicate -1] !== array[i]){
      array[nonNextDuplicate] = array[i]
      nonNextDuplicate += 1
    }
  }
  return nonNextDuplicate
}

console.log(`Length of array containing no duplicates --- ${duplicates([2, 3, 3, 3, 6, 9, 9])}`)
