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

//Given a string and a pattern, find out if the string contains any permutation of the pattern.

function find_permutation(str, pattern){
  let windowStart = 0
  let charFrequency = {}
  let match = 0

  //Fill hash map with the letters from pattern
  for(let i=0;i<pattern.length;i++){
    let char = pattern[i]
    if(!(char in charFrequency)){
      charFrequency[char] = 1
    }
    else{
      charFrequency[char] ++
    }
  }

  //Loop through string
  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(rightChar in charFrequency){
      charFrequency[rightChar] -= 1
      if(charFrequency[rightChar] === 0){
        match++
      }
    }
    if(match === Object.keys(charFrequency).length){
      return true
    }
    if(i - windowStart + 1 >= pattern.length){
      let leftChar = str[windowStart]
      if(leftChar in charFrequency){
        if(charFrequency[leftChar] === 0){
          match --
        }
        charFrequency[leftChar] += 1
      }
      windowStart++
    }
  }
  return false
}

console.log(`Contains a permutation --- ${find_permutation('oidbcaf', 'abc')}`)

//Given a string and a pattern, find all anagrams of the pattern in the given string

function find_string_anagrams(str,pattern){
  let windowStart = 0
  let match = 0
  let charFrequency = {}
  let array = []

  for(let i=0;i<pattern.length;i++){
    let char = pattern[i]
    if(!(char in charFrequency)){
      charFrequency[char] = 0
    }
    charFrequency[char] ++
  }

  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(rightChar in charFrequency){
      charFrequency[rightChar] -=1
      if(charFrequency[rightChar] === 0){
        match++
      }
    }

    if(match === Object.keys(charFrequency).length){
      array.push(i - pattern.length +1)
    }

    if(i - windowStart +1 >= pattern.length){
      let leftChar = str[windowStart]
      if(leftChar in charFrequency){
        if(charFrequency[leftChar] === 0){
          match --
        }
        charFrequency[leftChar] ++
      }
      windowStart++
    }
  }
  return array
}

console.log(`Find anagrams by index --- ${find_string_anagrams('abbcabc', 'abc')}`)

//Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

function find_substring(str, pattern){
  let windowStart = 0
  let charFrequency ={}
  let substring = Infinity
  let match = 0

  for(let i=0;i<pattern.length;i++){
    let char = pattern[i]
    if(!(char in charFrequency)){
      charFrequency[char] = 1
    }
    else{
      charFrequency[char] +=1
    }
  }

  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(rightChar in charFrequency){
      charFrequency[rightChar] -= 1
      if(charFrequency[rightChar] === 0){
        match++
      }
    }

    if(match === Object.keys(charFrequency).length){
      if(substring.length > str.slice(windowStart, i)){
        console.log("yasss?")
        substring = str.slice(windowStart, i)
      }
    }

    let leftChar = str[windowStart]
    if(leftChar in charFrequency){
      if(charFrequency[leftChar] === 0){
        match--
      }
      charFrequency[leftChar] += 1
    }
    windowStart++
  }
  return charFrequency
}

console.log(`Shortest Substring --- ${find_substring('adcad', 'abc')}`)

//Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

function find_substring(str,pattern){
  let windowStart = 0
  let charFrequency = {}
  let minLength = str.length
  let stringStart = 0
  let match = 0

  for(let i=0;i<pattern.length;i++){
    let char = pattern[i]
    if(!(char in charFrequency)){
      charFrequency[char] = 0
    }
    charFrequency[char]++
  }

  for(let i=0;i<str.length;i++){
    let rightChar = str[i]
    if(rightChar in charFrequency){
      charFrequency[rightChar] -= 1
      if(charFrequency[rightChar] >= 0){
        match ++
      }
    }

    while(match === pattern.length){
      if(minLength > i - windowStart + 1){
        minLength = i - windowStart + 1
        stringStart = windowStart
      }

      let leftChar = str[windowStart]
      if(leftChar in charFrequency){
        if(charFrequency[leftChar] === 0){
          match --
        }
        charFrequency[leftChar] += 1
      }
      windowStart ++
    }
  }
  return str.slice(stringStart, stringStart + minLength)
}

console.log(`Shortest Substring containing letters --- ${find_substring('abdbca', 'abc')}`)
