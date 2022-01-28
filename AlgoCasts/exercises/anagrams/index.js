// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const clean = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

function anagrams(stringA, stringB) {
  return clean(stringA) === clean(stringB);
}

module.exports = anagrams;

/**
 * 
 * NOTES
 * 
 * HELPER FUNCTIONS - help organize and minimize code;  
OLDER ATTEMPTS

3. CLEANED UP
const clean = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

function anagrams(stringA, stringB) {
  return clean(stringA) === clean(stringB);
}

2. WORKING ATTEMPT W ARRAYS
  const cleanA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  const cleanB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return cleanA === cleanB;

1. EXAMPLE WITH NOTES
const clean = (str) => {
  //Clean anything that's not a letter and ignore capitalization
  return str.replace(/[^\w]/g, '').toLowerCase();
};

const charMap = (str) => {
  //Create map object with quantities of all characters
  const map = {};

  //Count characters
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
}

function anagrams(stringA, stringB) {
  const mapA = charMap(stringA);
  const mapB = charMap(stringB);

  //Check both contain same # of types
  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  //Loop through A to check quantities
  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }

  return true;
}

1. BLIND
  //Assign to array
  const formatA = stringA.toLowerCase()
    //replace spaces
    .replace(/\s+/g, '')
    //remove punct
    .replace(/[-!?.,]/g, '')
    //convert to array
    .split('')
    //sort ascending
    .sort()
    //convert back to string
    .join('');

  const formatB = stringB.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[-!?.,]/g, '')
    .split('')
    .sort()
    .join();
  
  return formatA === formatB;
 */
