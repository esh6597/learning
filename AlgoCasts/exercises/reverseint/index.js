// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //Tutorial Answer - neater than one-liner, but only 1 extra variable
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

/**
OLDER ATTEMPTS

ONELINE 4
return (parseInt(Math.abs(n).toString().split('').reverse().join(''))*Math.sign(n));

WORKING ATTEMPT 2 + 3
let string = Math.abs(n).toString();
  let reverse = string.split('').reverse().join('');
  let parse = parseInt(reverse);
  return (parse * Math.sign(n));

  let string = Math.abs(n).toString();
  let reverse = string.split('').reverse().join('');
  return (parseInt(reverse) * Math.sign(n));

BLIND ATTEMPT 1
const sign = Math.sign(n);
  const reverse = Math.abs(n)
  .toString
  .split('')
  .reverse()
  .join('');
  const parse = parseInt(reverse);
  const final = (sign * parse);
  return final;
 */
