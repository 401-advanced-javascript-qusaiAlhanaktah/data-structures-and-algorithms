const Node = require('./node.js');

class Queue {
  // in Queue, we have two openings, front and back
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    // we are pointing backwards in our queue
    newNode.next = this.back;
    this.back = newNode;

    if (this.front === null){
      this.front = newNode;
    }
  }

  dequeue() {
    if (this.front === null) {
      return null;
    }
    const frontNode = this.front;


    // checking to see if there is more than one node
    if (this.back !== this.front) {
      let current = this.back;
      while (current.next !== this.front) {
        current = current.next;
      }
      this.front = current;
      this.front.next = null;
    }
    // this takes care of the edge case of only having one node
    else {
      this.front = null;
      this.back = null;
    }
    return frontNode.value;
  }

  peek() {
    return this.front === null ? null : this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  toArray() {
    const arr = [];
    let current = this.back;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}
module.exports = Queue;