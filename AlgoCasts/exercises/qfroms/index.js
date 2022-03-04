// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  // CLASS ANSWER: MORE LINES OF CODE, UNFORTUNATELY
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;


// 1. WORKING BLIND ATTEMPT
// constructor() {
//   this.stA = new Stack();
//   this.stR = new Stack();
// }

// add(e) {
//   while (this.stR.peek()) {
//     this.stA.push(this.stR.pop());
//   }

//   this.stA.push(e);

//   //Move back in prep for other actions
//   while (this.stA.peek()) {
//     this.stR.push(this.stA.pop());
//   }
// }

// remove() {
//   return this.stR.pop();
// }

// peek() {
//   return this.stR.peek();
// }
