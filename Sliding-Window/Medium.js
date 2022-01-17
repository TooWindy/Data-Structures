//Given a string, find the length of the longest substring in it with no more than K distinct characters.

function longest_substring_with_k_distinct(str, k){
  let windowStart = 0
  let maxLength = 0
  let charFrequency = {}

  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(!(rightChar in charFrequency)){
      charFrequency[rightChar] = 1
    }
    else{
      charFrequency[rightChar] ++
    }

    while(Object.keys(charFrequency).length > k){
      let leftChar = str[windowStart]
      charFrequency[leftChar] -= 1
      if(charFrequency[leftChar] === 0){
        delete charFrequency[leftChar]
      }
      windowStart++
    }
    maxLength = Math.max(maxLength, i - windowStart + 1)
  }
  return maxLength
}

console.log(`Length of the longest substring --- ${longest_substring_with_k_distinct('araaci', 2)}`)
