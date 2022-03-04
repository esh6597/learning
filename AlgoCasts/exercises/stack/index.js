// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// STACK NOTES
/**
 *  Code looks very similar to queue, HOWEVER:
 * QUEUE: First In First Out (FIFO)
 * STACK: First In Last Out (FILO)
 * - Just a difference in order
 * */

class Stack {
  constructor() {
    this.data = [];
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
