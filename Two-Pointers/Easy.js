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
    if(array[nonNextDuplicate-1] !== array[i]){
      array[nonNextDuplicate] = array[i]
      nonNextDuplicate += 1
    }
  }
  return nonNextDuplicate
}

//This is an alternate solution of the same problem above. It utilizes a hashset to remember what numbers we've come across. If its in the set already skip it,
function alternateDuplicates(array){
  let numberFrequency = new Set()
  let unique = 0
  for(let i=0;i<array.length;i++){
    if(!(numberFrequency.has(array[i]))){
      numberFrequency.add(array[i])
      unique++
    }
  }
  return unique
}
console.log(`Length of array containing no duplicates --- ${alternateDuplicates([2, 2, 2, 11])}`)
