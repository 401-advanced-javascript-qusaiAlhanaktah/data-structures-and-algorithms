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
  // D: READ THE DATA ;   L: GO LEFT ;    R: GO RIGHT

  // DLR
  preOrder(){
    let storage = [];
    let _trace = (node)=>{
      storage.push(node.value);
      if (node.left) _trace(node.left);
      if (node.right) _trace(node.right);
    };
    _trace(this.root);
    return storage;
  }
  // LDR
  inOrder(){
    let storage = [];
    let _trace = (node) => {
      if(node.left) _trace(node.left);
      storage.push(node.value);
      if(node.right) _trace(node.right);
    };
    _trace(this.root);
    return storage;
  }
  // LRD
  postOrder(){
    let storage = [];
    let _trace = (node) => {
      if(node.left) _trace(node.left);
      if(node.right) _trace(node.right);
      storage.push(node.value);
    };
    _trace(this.root);
    return storage;
  }
}

module.exports = {BinaryTree,Node};
// class BinarySearchTree extends BinaryTree {

//   add(value){
//     let newNode = new Node(value);
//   }
//   contains(val){
//     let _trace = (node) => {
//       if(node.value === val) return true;
//       if(node.left) _trace(node.left);
//       if(node.value === val) return true;
//       if(node.right) _trace(node.right);
//       if(node.value === val) return true;
//     };
//     _trace(this.root);
//     return false;
//   }
// }
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);
// let node6 = new Node(6);
// let node7 = new Node(7);
// let node8 = new Node(8);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node4.right = node6;
// node3.right = node5;
// node5.left = node7;
// node5.right = node8;

// let tree = new BinarySearchTree(node1);
// console.log(tree.contains(6));