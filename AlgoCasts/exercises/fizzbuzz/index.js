// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let print;
    if (i % 3 === 0 && i % 5 === 0) {
      print = 'fizzbuzz';
    } else if (i % 3 === 0) {
      print = 'fizz';
    } else if (i % 5 === 0) {
      print = 'buzz';
    } else {
      print = i;
    }

    console.log(print);
  }
}

module.exports = fizzBuzz;

/**
 * NOTES
 * MODULO (%) operator: gives you the remainder after the division.
 * 
 * Some simpler problems, like this one, just kind of have 1 long form answer
 * that's simple and legible. It doesn't need to be fancy or condensed to show
 * interviewers.
 */

/**
OLDER ATTEMPTS

3. FINAL attempt
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let print;
    if (i % 3 === 0 && i % 5 === 0) {
      print = 'fizzbuzz';
    } else if (i % 3 === 0) {
      print = 'fizz';
    } else if (i % 5 === 0) {
      print = 'buzz';
    } else {
      print = i;
    }

    console.log(print);
  }
}

2. WITH MODULO
for (let i = 1; i <= n; i++) {
    let print;
    if (i % 15 === 0) {
      print = 'fizzbuzz';
    } else if (i % 3 === 0) {
      print = 'fizz';
    } else if (i % 5 === 0) {
      print = 'buzz';
    } else {
      print = n;
    }

    console.log(print);
  }

1. BLIND TRY
for (let i = 1; i <= n; i++) {
    let print;
    if (Number.isInteger(n/15)) {
      print = 'fizzbuzz';
    } else if (Number.isInteger(n/3)) {
      print = 'fizz';
    } else if (Number.isInteger(n/5)) {
      print = 'buzz';
    } else {
      print = n;
    }

    console.log(print);
  }
 */
