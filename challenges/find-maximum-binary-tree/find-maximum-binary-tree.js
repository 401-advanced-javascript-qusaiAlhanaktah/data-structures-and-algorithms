class Node {
  constructor(value, right = null, left = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
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
    storage.sort((a,b)=>b > a);
    return storage[0];
  }

}

module.exports = {BinaryTree,Node};