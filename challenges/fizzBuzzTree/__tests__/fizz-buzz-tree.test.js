
const BinaryTree = require('../../tree/lib/tree.js');
const fizzBuzz = require('../lib/fizz-buzz-tree.js');
describe('Binary Tree Module', ()=>{
  let tree = null;
  beforeAll(()=>{
    let node1 = new BinaryTree.Node(1);
    let node2 = new BinaryTree.Node(6);
    let node3 = new BinaryTree.Node(10);
    let node4 = new BinaryTree.Node(15);
    let node5 = new BinaryTree.Node(2);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node3.right = node5;

    tree = new BinaryTree.BinaryTree(node1);
  });
  it('If the value is divisible by 3, replace the value with “Fizz”',() => {
    expect(fizzBuzz(tree).root.left.value).toEqual('Fizz');
    expect(typeof fizzBuzz(tree)).toBe('object');
  });

  it('If the value is divisible by 5, replace the value with “Buzz”',() => {
    expect(fizzBuzz(tree).root.right.value).toEqual('Buzz');
    expect(typeof fizzBuzz(tree)).toBe('object');
  });
  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”',() => {
    expect(fizzBuzz(tree).root.left.left.value).toEqual('FizzBuzz');
    expect(typeof fizzBuzz(tree)).toBe('object');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String',() => {
    expect(fizzBuzz(tree).root.value).toEqual('1');
    expect(typeof fizzBuzz(tree).root.value).toBe('string');
    expect(fizzBuzz(tree).root.right.right.value).toEqual('2');
    expect(typeof fizzBuzz(tree).root.value).toBe('string');
  });
});