/* eslint-disable strict */
'use strict';

const BreadthfirstTraversal = require('../Breadth-first-Traversal.js');

describe('Breadth first Traversal Tree Module', ()=>{
  let tree = null;
  beforeAll(()=>{
    let node1 = new BreadthfirstTraversal.Node(2);
    let node2 = new BreadthfirstTraversal.Node(7);
    let node3 = new BreadthfirstTraversal.Node(5);
    let node4 = new BreadthfirstTraversal.Node(2);
    let node5 = new BreadthfirstTraversal.Node(6);
    let node6 = new BreadthfirstTraversal.Node(9);
    let node7 = new BreadthfirstTraversal.Node(5);
    let node8 = new BreadthfirstTraversal.Node(11);
    let node9 = new BreadthfirstTraversal.Node(4);


    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node5.left = node7;
    node5.right = node8;
    node3.right = node6;
    node6.left = node9;


    tree = new BreadthfirstTraversal.BreadthfirstTraversal(node1);
  });
  it('it should traversal as breadth in Binary search tree and return null for empty tree', ()=>{
    let tree1 = new BreadthfirstTraversal.BreadthfirstTraversal();
    expect(tree1.breadthTraversal()).toBeNull();
  });
  it('it should traversal as breadth in Binary search tree', ()=>{
    expect(tree.breadthTraversal()).toEqual([2,7,5,2,6,9,5,11,4]);
  });

});
