class Node {
  constructor(value, right = null, left = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreeMaxValue {
  constructor(root = null){
    this.root = root;
  }

  findMaximumValue(){
    let storage = [];
    let _trace = (node)=>{
      storage.push(node.value);
      if (node.left) _trace(node.left);
      if (node.right) _trace(node.right);
    };
    _trace(this.root);
    let max = 0;
    for (let i = 0; i < storage.length; i++) {
      if(storage[i] > max) max = storage[i];
    }
    // storage.sort((a,b)=>b > a);
    // return storage[0];
    return max;
  }
}
module.exports = {BinaryTreeMaxValue,Node};