// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}

module.exports = steps;

// 3. RECURSIVE ANSWER
// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }

//   steps(n, row, stair);
// }

// 2. ANSWER 1
// for (let row = 0; row < n; row++) {
//   let stair = '';

//   for (let column = 0; column < n; column++) {
//     if (column <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//   }

//   console.log(stair);
// }  

// 1. WORKING BLIND ATTEMPT
// let print = [];

//   for (let a = 1; a <= n; a++) {

//     print = [];

//     for (let b = 1; b <= a; b++) {
//     print.push('#');
//     }

//     let remainder = n - a;
//     for (let c = 1; c <= remainder; c++) {
//       print.push(' ');
//     }

//     console.log(print.join(''));
//   }
