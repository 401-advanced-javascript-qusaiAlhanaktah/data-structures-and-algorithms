
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
    if(!this.top){
      this.top = new Node(value);
    }else{
      let currentQueue = this.top;
      while(currentQueue.next){
        currentQueue = currentQueue.next;
      }
      currentQueue.next = new Node(value);
    }
    return this;
  }

  pop() {
    if (this.top === null) return null;
    let topNode = this.top;
    while(topNode.next.next){
      topNode = topNode.next;
    }
    // const lastNode = topNode.next;
    topNode.next = null;
    return topNode.value;
  }

  peek() {
    return this.front === null ? null : this.front.value;
  }
}
class PseudoQueue {
  constructor() {
    this.front = new Stack;
    this.rear = new Stack;
  }
  enqueue(value){
    if (!this.front.top) {
      this.front.push(value);
    }else{
      this.rear.push(value);
    }
  }
  dequeue(){
    if (!this.rear) {
      this.front.pop();
    }else{
      let currentQueue = this.rear;
      while(currentQueue.next){
        currentQueue = currentQueue.next;
      }
      return currentQueue.pop();
    }
  }
}

module.exports = PseudoQueue;