// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
 
}

module.exports = matrix;

// 2. GUIDED ATTEMPT AT DIFFERENT METHOD (NOT WORKING)
// const matrix = [];

// //Create and push row arrays
// for (let r = 0; r < n; r++) {
//   let rowArr = [];
//   for (let c = 0; c < n; c++) {
//     //Add searchable unique decimal to create columns
//     rowArr.push(0.5);
//   }
//   //Push to matrix
//   matrix.push(rowArr);
// }

// //Initialize coordinates and start at 1st square
// let row = 0;
// let col = 0;
// let direction = 'right';
// //Loop and place spiral numbers
// for (let counter = 1; counter <= n^2; counter++) {
//   if (matrix[row][col] === 0.5) {
//     matrix[row][col] = counter;
//   }
  
//   //Going right
//   if (direction === 'right') {
//     //Hit corner going right OR next coordinate isn't placeholder
//     if (col + 1 === n || matrix[row][col + 1] !== 0.5) {
//       direction = 'down';
//       row++;
//     } else {
//       col++;
//     }
//   }

//   //Down
//   if (direction === 'down') {
//     if (row + 1 === n || matrix[row + 1][col] !== 0.5) {
//       direction = 'left';
//       col--;
//     } else {
//       row++;
//     }
//   }

//   //Left
//   if (direction === 'left') {
//     if (col - 1 === -1 || matrix[row][col - 1] !== 0.5) {
//       direction = 'up';
//       row--;
//     } else {
//       col--;
//     }
//   }

//   //Up
//   if (direction === 'up') {
//     if (row - 1 === -1 || matrix[row - 1][col] !== 0.5) {
//       direction = 'right';
//       col++;
//     } else {
//       row--;
//     }
//   }
// }

// return matrix;

// 1. ANSWER 1 VIA ROW AND COL MOVING
//  const results = [];

//   for (let r = 0; r < n; r++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     // Top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     //Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;

//     //Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++
//     }
//     endRow--;

//     // Start column
//     for (let i = endRow; i>= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }

//   return results;

// IN PROGRESS ATTEMPT

