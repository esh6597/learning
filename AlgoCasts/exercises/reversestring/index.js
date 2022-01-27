// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('variable');

module.exports = reverse;


//OLDER ATTEMPTS
/**
 xx
let strArray = [];
  for (let i = 0; i < str.length; i++) {
    strArray.push(str.slice(i, 1));
  }
  let final = strArray.reverse().join();
  console.log(final);
  return final;
}
====================

  const arr = str.split('');
  arr.reverse();
  return arr.join('');

====================

  return str
    .split('')
    .reverse()
    .join('');


=====================
xx
let rev = '';
  for (let i = str.length = 1; i >= 0; i--) {
    rev.concat(str[i]);
 }
 return rev;

 =====================

 rev = '';
  for (let chara of str) {
    rev = chara + rev;
  }
  return rev;


*/