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
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }
}

module.exports = LinkedList;