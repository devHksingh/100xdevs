/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels =['a', 'e', 'i', 'o', 'u']
    const alfabet = "abcdefghijklmnopqrstuvwxyz".split('')
    str = str.toLowerCase()
    str = str.split('')
    let count =0
    let validStr =[]
    if ((str.length === 0) ) return 0
    str.map((word)=>{
      if((alfabet.includes(word))&&(vowels.includes(word))){
        count+=1
      }
    })
    return count


}

module.exports = countVowels;
