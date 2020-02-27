/* eslint-disable strict */
'use strict';

const HashMap = require('../hashtable.js');

describe('Hash Table Module',()=>{
  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('name','qusai');
    hashMap.storage.forEach(item=>{
      expect(item.head.data.key).toEqual('name');
      expect(item.head.data.value).toEqual('qusai');
    });

  });
  it('Retrieving based on a key returns the value stored',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('age',23);
    hashMap.storage.forEach(item=>{
      expect(item.head.data.key).toEqual('age');
      expect(item.head.data.value).toEqual(23);
    });
  });
  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('age',23);
    expect(hashMap.contain('hoppies')).toBeNull();
    expect(hashMap.contain('cool')).toBeNull();
  });
  it('Successfully handle a collision within the hashtable',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('listen','qusai');
    hashMap.add('silent','hi');
    let hashedKey = hashMap.hash('listen');
    expect(hashMap.storage[hashedKey].head.data.key).toBeDefined();
    expect(hashMap.storage[hashedKey].head.data.value).toBeDefined();
    expect(hashMap.storage[hashedKey].head.next.data.key).toBeDefined();
    expect(hashMap.storage[hashedKey].head.next.data.value).toBeDefined();
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('listen','qusai');
    hashMap.add('silent','hi');
    let hashedKey = hashMap.hash('listen');
    expect(hashMap.storage[hashedKey].head.data.key).toEqual('silent');
    expect(hashMap.storage[hashedKey].head.data.value).toEqual('hi');
    expect(hashMap.storage[hashedKey].head.next.data.key).toEqual('listen');
    expect(hashMap.storage[hashedKey].head.next.data.value).toEqual('qusai');
  });
  it('Successfully hash a key to an in-range value',()=>{
    let hashMap = new HashMap(1024);
    hashMap.add('listen','qusai');
    hashMap.add('silent','hi');
    let hashedKey = hashMap.hash('listen');
    expect(hashedKey).toEqual(157);
    expect(typeof hashedKey).toBe('number');
  });

});