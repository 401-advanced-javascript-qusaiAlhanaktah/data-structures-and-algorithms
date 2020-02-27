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
  //   get(){
  //     if (!this.head) return 'It is Empty';
  //     else{
  //       let current = this.head;
  //       while(current){
  //         current = current.next;
  //       }

//     }
//   }
}

class Hashmap {
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
    let hashedKey = this.hash(key);
    for(let i = 0; i <= hashedKey;i++){
      console.log(i);
    //   if (this.storage[i] === key) return this.storage[i].head.data;
    //   else return 'The Item Does Not Exist';
    }
  }
}
let hashmap = new Hashmap(1024);

hashmap.add('name', 'ahmad');
hashmap.add('listen', true);
hashmap.add('silent', 'ayman'); // This will cause a collision
hashmap.add('abu aseel', 0);


hashmap.storage.forEach((item, i)=>{
  console.log(item, i);
});
// console.log(hashmap.get('ayman'));

