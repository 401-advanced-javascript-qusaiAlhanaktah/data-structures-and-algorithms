/* eslint-disable strict */
'use strict';

const findMaximumValue = require('../find-maximum-binary-tree.js');

describe('Breadth first Traversal Tree Module', ()=>{
  let tree = null;
  let tree1 = null;
  beforeAll(()=>{
    let node1 = new findMaximumValue.Node(2);
    let node2 = new findMaximumValue.Node(7);
    let node3 = new findMaximumValue.Node(5);
    let node4 = new findMaximumValue.Node(2);
    let node5 = new findMaximumValue.Node(6);
    let node6 = new findMaximumValue.Node(9);
    let node7 = new findMaximumValue.Node(5);
    let node8 = new findMaximumValue.Node(11);
    let node9 = new findMaximumValue.Node(4);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node7;
    node5.right = node8;
    node3.right = node6;
    node6.left = node9;

    tree = new findMaximumValue.BinaryTree(node1);
    tree1 = new findMaximumValue.BinaryTree(node3);
  });
  it('it should return the maximum value stored in the tree1 (9)', ()=>{
    expect(tree1.findMaximumValue()).toEqual(9);
  });
  it('it should return the maximum value stored in the tree (11)', ()=>{
    expect(tree.findMaximumValue()).toEqual(11);
  });

});
