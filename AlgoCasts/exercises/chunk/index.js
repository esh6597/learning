// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //Example solution 2 that's more straightforward
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

/**
OLDER ATTEMPTS

2. EXAMPLE SOLUTION 1: ???
const chunked = [];

  //Iterate through array
  for (let element of array) {

    //I completely missed why this works, honestly.
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;

1. WORKING BLIND ATTEMPT + NOTES

//Declared with initial nested empty array
  const chunked = [[]];

  //Keep track of which final array we're on
  let onArray = 0;

  //Iterate through array
  array.map((element) => {

    //Get 0-index position of element
    let index = array.indexOf(element);
    //Current array is not long enough
    if (chunked[onArray].length !== size) {
      chunked[onArray].push(element);

    //Array is long enough
    } else {

      //Create new array and go to new index
      chunked.push([]);
      onArray++;
      chunked[onArray].push(element);
    }
  });

  return chunked;
 */

module.exports = chunk;
