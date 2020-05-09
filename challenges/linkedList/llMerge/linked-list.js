
class Node {

  constructor( value ){
    this.value = value;
    this.next = null;
  }

}

module.exports = Node;

class LinkedList {

  constructor(){
    this.head = null;
  }

  insert( value ){

    let newNode = new Node ( value );

    if( this.head === null ) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  show(){
    let array = [];
    let currentNode = this.head;
    while( currentNode !== null ){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array.join(' ');
  }

}
module.exports = LinkedList;