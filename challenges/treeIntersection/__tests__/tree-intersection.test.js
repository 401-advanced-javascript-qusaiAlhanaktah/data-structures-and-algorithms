/* eslint-disable camelcase */

const tree_intersection = require('../tree-intersection.js');
let BinaryTree = require('../../tree/lib/tree.js');

describe('Tree Intersection Module',()=>{
  let node1 = new BinaryTree.Node(1);
  let node2 = new BinaryTree.Node(2);
  let node3 = new BinaryTree.Node(3);
  let node4 = new BinaryTree.Node(4);
  let node = new BinaryTree.Node(7);

  let node5 = new BinaryTree.Node(1);
  let node6 = new BinaryTree.Node(2);
  let node7 = new BinaryTree.Node(3);
  let node8 = new BinaryTree.Node(8);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node3.right = node;

  node5.right = node6;
  node5.left = node7;
  node6.left = node8;

  let tree1 = new BinaryTree.BinaryTree(node1);
  let tree2 = new BinaryTree.BinaryTree(node5);
  it('should accept tow binaray tree and return a set of values found in both trees.',()=>{
    expect(tree_intersection(tree1,tree2)).toEqual([1,2,3]);
  });

  it('should accept tow binaray tree and return a set of values found in both trees.',()=>{
    expect(tree_intersection(tree1,tree2)).toEqual([1,2,3]);
  });

  it('return a set of values found in both trees as an array',()=>{
    expect(typeof tree_intersection(tree2,tree1)).toEqual('object');
  });
});