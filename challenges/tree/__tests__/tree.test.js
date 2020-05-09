
const BinaryTree = require('../lib/tree.js');

describe('Binary Tree Module', ()=>{
  let tree = null;
  beforeAll(()=>{
    let node1 = new BinaryTree.Node(1);
    let node2 = new BinaryTree.Node(2);
    let node3 = new BinaryTree.Node(3);
    let node4 = new BinaryTree.Node(4);
    let node5 = new BinaryTree.Node(5);
    let node6 = new BinaryTree.Node(6);
    let node7 = new BinaryTree.Node(7);
    let node8 = new BinaryTree.Node(8);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node4.right = node6;
    node3.right = node5;
    node5.left = node7;
    node5.right = node8;

    tree = new BinaryTree.BinaryTree(node1);
  });
  it('Can successfully instantiate an empty tree',()=>{
    let newTree = new BinaryTree.BinaryTree();
    expect(newTree).toBeDefined();
    expect(typeof newTree).toBe('object');
    expect(newTree.root).toBeNull();
  });
  it('Can successfully instantiate a tree with a single root node',() => {
    let node1 = new BinaryTree.Node(1);
    let node2 = new BinaryTree.Node(2);
    let node3 = new BinaryTree.Node(3);
    node1.left = node2;
    node1.right = node3;
    let newTree = new BinaryTree.BinaryTree(node1);
    expect(typeof tree).toBe('object');
    expect(newTree.root.value).toEqual(1);
    expect(newTree.root.left.value).toBe(2);
    expect(newTree.root.right.value).toBe(3);
  });
  it('Can successfully return a collection from a preorder() traversal',() => {
    let testArray = [1, 2, 4, 6, 3, 5, 7, 8 ];
    expect(tree.preOrder()).toEqual(testArray);
    expect(Array.isArray(tree.preOrder())).toBeTruthy();
  });
  it('Can successfully return a collection from an inorder() traversal',() => {
    let testArray = [ 4, 6, 2, 1, 3, 7, 5, 8 ];
    expect(tree.inOrder()).toEqual(testArray);
    expect(Array.isArray(tree.inOrder())).toBeTruthy();
  });
  it('Can successfully return a collection from a postorder() traversal',() => {
    let testArray = [ 6, 4, 2, 7, 8, 5, 3, 1 ];
    expect(tree.postOrder()).toEqual(testArray);
    expect(Array.isArray(tree.postOrder())).toBeTruthy();
  });
});