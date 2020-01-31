'use stricts';

const Node = require('./node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }
  includes(value){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        return true;
      }else{
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  toSrting(){
    let currentNode = this.head;
    let listOfString;
    while(currentNode){
      listOfString.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listOfString.join(' ');
  }
  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      this.index = node.index++;
    }else{
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
      this.index = node.index++;
    }
    return this;
  }
  insertBefore(value, newVal) {
    if(!this.head){
      this.head = new Node(newVal);
    }else{
      let currentNode = this.head;
      let afterNode = null;
      while(currentNode.next){
        if(currentNode.next.value === value){
          afterNode = currentNode.next;
          let newNode = new Node(newVal);
          newNode.next = afterNode;
          currentNode.next = newNode;
          return;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }
  insertAfter(value, newVal){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }
    let currentNode = this.head;
    let afterNode = null;
    while(currentNode){
      if(currentNode.value === value){
        afterNode = currentNode.next;
        let newNode = new Node(newVal);
        newNode.next = afterNode;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
    return this;
  }
  // kthFromEnd(k){
  //   let currentNode = this.head;
  //   // let afterNode = null;
  //   while(currentNode){
  //     if(this.index === k){
  //       return currentNode.value;
  //     }
  //     currentNode = currentNode.next;
  //   }
  //   return this;
  // }
  llkthFromEnd(k){
    let counter = this.head;
    let nodeContent = null;
    let nodeContentExist = false;
    let countdown = k;

    if (k < 0 ) return 'Exception';

    while(counter){
      if(countdown === 0 ) {
        countdown--;
        nodeContent = this.head;
        nodeContentExist = true;
      }
      if(nodeContentExist && counter.next !== null ){
        counter = counter.next;
        nodeContent = nodeContent.next;
      } else {
        counter = counter.next;
      }

      if (countdown > 0 ) countdown--;
    }
    return nodeContentExist ? nodeContent.value : 'Exception';
  }

}
module.exports = LinkedList;