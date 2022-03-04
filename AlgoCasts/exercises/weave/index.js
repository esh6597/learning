// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

module.exports = weave;

// 1. Working Blind Attempt
// //Define 3 queues
// const q1 = sourceOne;
// const q2 = sourceTwo;

// const qFin = new Queue();

//  // This is incorrect since we should be exclusively using methods whenever we can for this problem.
// while (q1.data.length > 0 && q2.data.length > 0) {
//   if (q1.peek() !== undefined) {
//     qFin.add(q1.peek());
//     q1.remove();
//   }
//   if (q2.peek() !== undefined) {
//     qFin.add(q2.peek());
//     q2.remove();
//   }
// }

// return qFin;