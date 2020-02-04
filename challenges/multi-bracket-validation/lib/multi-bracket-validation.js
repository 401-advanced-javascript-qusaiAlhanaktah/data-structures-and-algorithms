function multiBracketValidation(str) {
  let store = [];
  let letters = [];
  let keyValuePairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[' || str[i] === '{' || str[i] === '(' ) {
      store.push(str[i]);
    }
    else if (str[i].match(/^[A-Za-z]+$/)){
      letters.push(str[i]);
    }
    else {
      let lastOpener = store.pop();
      if (str[i] !== keyValuePairs[lastOpener]){
        return false;
      }
    }
  }
  if (store.length !== 0) {
    return false;
  }
  return true;
}

module.exports = multiBracketValidation;
