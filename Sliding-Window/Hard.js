//Given a string, find the length of the longest substring, which has all distinct characters

function non_repeat_substring(str){
  let windowStart = 0
  let charIndex = {}
  let maxLength = 0

  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(rightChar in charIndex){
      windowStart = Math.max(windowStart, charIndex[rightChar] + 1)
    }
    charIndex[rightChar] = i
    maxLength = Math.max(maxLength, i - windowStart + 1)
  }
  return maxLength
}

console.log(`Longest non-repeat substring --- ${non_repeat_substring('aabccbb')}`)
