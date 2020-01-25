'use stricts';

const Node = require('./node.js');

class LinkedList{
    constructor(){
        this.head = null;
    }

    append (value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }
}
class insert extends LinkedList{
constructor(){
    super();
}
}
module.exports = insert;