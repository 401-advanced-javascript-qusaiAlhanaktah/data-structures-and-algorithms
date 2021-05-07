

function FizzBuzzTree (tree){
  let _trace = (node)=>{
    if(node.value){
      if(node.value % 3 === 0 && node.value  % 5 === 0)  node.value = 'FizzBuzz';
      else if(node.value  % 5 === 0)  node.value = 'Buzz';
      else if(node.value % 3 === 0)  node.value = 'Fizz';
      else  node.value = `${node.value}`;
    }
    if (node.left) _trace(node.left);
    if (node.right) _trace(node.right);
  };
  _trace(tree.root);
  return tree;
}

module.exports = FizzBuzzTree;