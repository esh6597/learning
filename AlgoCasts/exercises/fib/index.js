// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// In this fib sequence, n[i] = n[i - 1] + n[i - 2]

function fib(n) {

}

module.exports = fib;

//4. 2ND ANSWER: RECURSIVE - MEMORIZE THIS ONE!
// Understand that it's influenced by the formula which produces the sequence

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// 3. 1ST ANSWER: ITERATIVE
// const result = [0, 1];

//   for (let i = 2; i <=n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];

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