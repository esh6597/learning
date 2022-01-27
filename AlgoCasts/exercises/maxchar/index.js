// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    chars[char] = chars[char]++ || 1;
    //My alternate:
    //chars[char] ? chars[char]++ : chars[char] = 1;
  }

  //Notice the syntax for iterating over objects
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

/**
 * NOTES
 * The technique used in this problem can be also used for similar questions, such as:
 * - What is the most common char in a string
 * - Is string A an anagram of string B (has same chars)
 * - Does the given string have any repeated characters in it
 * 
 * FOR...OF for iterables like arrays and strings
 *  ex: for (let character of string) {}
 * 
 * FOR...IN for objects
 * 
 * Object properties can use object[propertynamevalue] to assign and find values
 * 
 */

/**
PAST ATTEMPTS

2) CONVERSION WITH OR OPERATOR
  const chars = {};
  for (let char of string) {
    //Returns 1 if you can't add 1 to undefined chars[char]
    chars[char] = chars[char] + 1 || 1;
  }

1) CONVERSION WITH FOR
  const chars = {};
  for (let char of string) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

1. TRY TO CONVERT TO OBJECT
const counter = new Object();
  str.split('').map((char) => {
    if (counter[`${char}`]) {
      counter[`${char}`] = counter[`${char}`] + 1;
    } else {
      counter[`${char}`] = 1;
    }
  })
 */
