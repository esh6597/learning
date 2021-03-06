// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  
}

module.exports = pyramid;

// 3. ITERATIVE SOLUTION
// const midpoint = Math.floor((2*n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2*n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//   }

//   console.log(level);

// 2. RECURSIVE SOLUTION
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2*n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2*n - 1) / 2);
//   let add;

//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// }


// 1. WORKING BLIND ITERATIVE ATTEMPT
// for (let row = 1; row <= n; row++) {
//   let print = [];
//   for (let b = 1; b <= (2 * (n - row)); b++) {
//     print.push(' ');
//   }
//   for (let c = 1; c <= ((2 * row) - 1); c++) {
//     print.splice(n - row, 0, '#');
//   }

//   console.log(print.join(''));
// }
