/* eslint-disable strict */
'use strict';

function leftJoins(hashMap1, hashMap2) {
  for (let i = 0; i < hashMap2.storage.length; i++) {
    if (hashMap2.storage[i] && hashMap1.contain(hashMap2.storage[i].head.data.key)) hashMap1.add(hashMap2.storage[i].head.data.key,hashMap2.storage[i].head.data.value);
  }
  let result = [];
  for (let i = 0; i < hashMap1.storage.length; i++) {
    if(hashMap1.storage[i]){
      if(!hashMap1.storage[i].head.next) result.push([hashMap1.storage[i].head.data.key,hashMap1.storage[i].head.data.value,hashMap1.storage[i].head.next]);
      else  result.push([hashMap1.storage[i].head.data.key,hashMap1.storage[i].head.data.value,hashMap1.storage[i].head.next.data.value]);
    }
  }
  return result;
}
module.exports = leftJoins;
