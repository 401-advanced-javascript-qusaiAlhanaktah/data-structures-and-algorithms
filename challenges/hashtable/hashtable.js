/* eslint-disable strict */
'use strict';

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);
    if (!this.head) this.head = node;
    else{
      node.next = this.head;
      this.head = node;
    }
  }
}

class HashMap {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key){
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key[i].charCodeAt(0);
    }
    return sum * 19 % this.size;
  }
  add(key, value){
    let hashedKey = this.hash(key);
    if (!this.storage[hashedKey]) {
      let ll = new LinkedList();
      ll.add({key,value});
      this.storage[hashedKey] = ll;
    }else{
      this.storage[hashedKey].add({key, value});
    }
  }
  get(key){
    for(let i = 0; i <= this.storage.length;i++){
      if (this.storage[i] && this.storage[i].head.data.key === key) return this.storage[i].head.data.value;
    }
    return 'Item Does Not Exist';
  }
  contain(key){
    for(let i = 0; i <= this.storage.length;i++){
      if (this.storage[i] && this.storage[i].head.data.key === key) return true;
    }
    return null;
  }
}

module.exports = HashMap;
