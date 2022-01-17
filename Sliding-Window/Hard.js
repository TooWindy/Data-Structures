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

//Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

function length_of_longest_substring(str, k){
  let windowStart = 0
  let charFrequency={}
  let maxRepeatingCharacter = 0
  let maxLength = 0

  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(!(rightChar in charFrequency)){
      charFrequency[rightChar] = 0
    }
    charFrequency[rightChar] ++
    maxRepeatingCharacter = Math.max(maxRepeatingCharacter, charFrequency[rightChar])

    if((i - windowStart + 1 - maxRepeatingCharacter) > k){
      let leftChar = str[windowStart]
      charFrequency[leftChar] -= 1
      windowStart++
    }
    maxLength =Math.max(maxLength, i - windowStart + 1)
  }
  return maxLength
}

console.log(`Length of longest substring --- ${length_of_longest_substring('aabccbb', 2)}`)
