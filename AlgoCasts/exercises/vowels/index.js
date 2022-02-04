// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  
}

module.exports = vowels;

// 3. LOOPING SOLUTION ANSWER 1
// In an interview, this may be a better solution to offer as the logic
//  is more sound.
// let count = 0;
//  This can be a string, but the array looks better logically to future devs
//  Plus, .includes can be used on both
//   const checker = ['a', 'e', 'i','o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;

// 2. ANSWER 2:
// Better bc of checking in case of null value
// Also str.match(/regex/g) will return an array instead

// const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;

// 1. WORKING BLIND ATTEMPT
// let vowels = [...str.matchAll(/[aeiou]/gi)];
// return vowels.length;