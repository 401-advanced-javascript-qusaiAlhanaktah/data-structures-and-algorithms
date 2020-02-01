
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) return null;
    const topNode = this.top;
    this.top = topNode.next;
    return topNode.value;
  }

  peek() {
    return this.top === null ? null : this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

  toArray() {
    const arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}
module.exports = Stack;