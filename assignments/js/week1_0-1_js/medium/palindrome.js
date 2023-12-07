/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  str =str.split('')
  let toCheckPalidrome =[]
  const alfabet = "abcdefghijklmnopqrstuvwxyz"
  const validVariable = alfabet.split('')
  if (str.length ===1){
    return true;
  }else if(str.length ===1){
    return true;
  }
  
  for(let i=0;i<str.length;i++){
    if(validVariable.includes(str[i])){
      toCheckPalidrome.push(str[i])
    }
  }
  const arrayLength = toCheckPalidrome.length
  // console.log(Math.floor(toCheckPalidrome.length/2));
  // console.log(toCheckPalidrome);

  for(let i=0;i<Math.floor(toCheckPalidrome.length/2);i++){
    if(!(toCheckPalidrome[i]===toCheckPalidrome[arrayLength-1-i])){
      return false
    }
  }

  return true;
}

module.exports = isPalindrome;
// let test = "race car"
// console.log(isPalindrome(test));
