//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_sub_array_of_size_k(array, k){
  let windowSum = 0
  let windowStart = 0
  let maxSum = 0

  for(let i=0;i<array.length;i++){
    windowSum += array[i]
    if(i >= k -1){
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= array[windowStart]
      windowStart++
    }
  }
  return maxSum
}

console.log(`Max subarray sum --- ${max_sub_array_of_size_k([2, 1, 5, 1, 3, 2],3)}`)

//Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

function smallest_subarray_sum(array, k){
  let windowStart = 0
  let windowSum = 0
  let minLength = Infinity

  for( let i=0;i<array.length;i++){
    windowSum += array[i]
    while(windowSum >= k){
      minLength = Math.min(minLength, i - windowStart + 1)
      windowSum-= array[windowStart]
      windowStart ++
    }
  }
  if(minLength === Infinity){
    return 0
  }
  return minLength
}


console.log(`Smallest subarray length --- ${smallest_subarray_sum([2, 1, 5, 2, 3, 2], 7)}`)
