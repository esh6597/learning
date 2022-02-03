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
  //loop 1 to n ROWS
  for (let row = 1; row <= n; row++) {
    let print = [];
    for (let b = 1; b <= (2 * (n - row)); b++) {
      print.push(' ');
    }
    for (let c = 1; c <= ((2 * row) - 1); b++) {
      print.splice(n - row, '#');
    }

    console.log(print.join(''));
  }
  //for each row:
  //  add 2(n - ROW) spaces
  //  in middle, add (2 * ROW) - 1 hashes
  //  print
}

module.exports = pyramid;
