// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

}

module.exports = fib;

// 2. BLIND RECURSIVE ATTEMPT
// function fib(n, step = 1, sum = 1, last = 0) {
//   if (n === 0 || n < 0) {
//     return 0;
//   } else if (n === step) {
//     return sum;
//   } else {
//     let mem = sum + last;
//     last = sum;
//     sum = mem;
//     step++;
//     fib(n, step, sum, last);
//   }
// }


// 1. BLIND WORKING ATTEMPT
// //Use 2 element array for memory
// const mem = [0, 1];
// if (n === 0) {
//   return 0;
// } else if (n === 1 || n === 2) {
//   return 1;
// }
// //loop to n
// //add 1 elements together + assign
// //move mem1 to mem0 then assign add to mem1
// for (let i = 0; i < n - 1; i++) {
//   let sum = mem[0] + mem[1];
//   mem[0] = mem[1];
//   mem[1] = sum;
// }
// return mem[1];