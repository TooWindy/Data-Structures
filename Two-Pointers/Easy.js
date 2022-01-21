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

//This is an alternate solution of the same problem above. It utilizes a hashset to remember what numbers we've come across. If its in the set already ignore it, but if not, then add it to the set and increment the unique variable by 1.

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
// console.log(`Length of array containing no duplicates --- ${duplicates([2, 2, 2, 11])}`)
console.log(`Length of array containing no duplicates --- ${alternateDuplicates([2, 3, 3, 3, 6, 9, 9])}`)

function squareArray(array){
  let p1 = 0
  let p2 = array.length -1
  let arr = []

  let i=0
  //Could also use a for loop: for(i=0;i<array.length;i++)
  while(i < array.length){
    if(Math.abs(array[p1] > array[p2])){
      arr.push(Math.pow(array[p1], 2))
      p1++
    }
    else{
      arr.push(Math.pow(array[p2], 2))
      p2--
    }
    i++
  }
  return arr.sort()
}

console.log(`Squared array --- ${squareArray([-3, -1, 0, 1, 2])}`)
