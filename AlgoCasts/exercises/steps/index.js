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

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }  
}

module.exports = steps;

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
