function isPalindrome(word) {
  // Write your algorithm here
  return word === word.slice().split('').reverse().join('');
  // let result;
  // let reverseWord = word.slice().split('').reverse().join('');
  // //ternary expression
  // word === reverseWord ? result = true : result  = false;
  // return result; 
}

/* 
  Add your pseudocode here

  Initialise a result variable that will be assigned a value once ternary expression is executed.
  Slice the word to maintain the original string for comparison later on.

  Optimizing my code
  Using a strict equality operator will compare both the orginal and the reverse word on execution
  This bypasses the need to assign variables like result and reverseWord which 
  results in cleaner code.
*/

/*
  Add written explanation of your solution here
  
  My function will only take a string as an argument.
  With that string, I need to split the characters and then reverse the order and rejoin
  to create the reverse of that string. I will then need to compare the result with 
  the original string 

  (ternary expression => condition ? expression_if_true : expression_if_false), 

  and if they are  matching then the function should return true.
  Otherwise it should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
