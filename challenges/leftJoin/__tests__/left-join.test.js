/* eslint-disable camelcase */

const leftJoins = require('../left-join.js');
let HashMap = require('../../hashtable/hashtable.js');

describe('Left Join Module',()=>{

  it('should return an array of arraies for common vlaues between tow hashMap structure.',()=>{
    let hashMap1 = new HashMap(1024);
    let hashMap2 = new HashMap(1024);

    hashMap1.add('fond','enamored');
    hashMap1.add('wrath','anger');
    hashMap1.add('diligent','employed');
    hashMap1.add('outifit','garb');
    hashMap1.add('guide','usher');

    hashMap2.add('fond','averse');
    hashMap1.add('wrath','delight');
    hashMap2.add('diligent','idle');
    hashMap2.add('guide','follow');
    hashMap2.add('flow','jam');
    let arr = [
      [ 'wrath', 'delight', 'anger' ],
      [ 'outifit', 'garb', null ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'fond', 'averse', 'enamored' ],
    ];
    leftJoins(hashMap1,hashMap2).map((item, idx)=>{
      expect(item).toEqual(arr[idx]);
    });
  });

  it('should return an array of arraies for common vlaues between tow hashMap structure.',()=>{
    let hashMap1 = new HashMap(1024);
    let hashMap2 = new HashMap(1024);

    hashMap1.add('fond','enamored');
    hashMap1.add('wrath','anger');
    hashMap1.add('diligent','employed');
    hashMap1.add('outifit','garb');
    hashMap1.add('guide','usher');

    hashMap2.add('fond','averse');
    hashMap1.add('wrath','delight');
    hashMap2.add('diligent','idle');
    hashMap2.add('guide','follow');
    hashMap2.add('flow','jam');
    let arr = [
      [ 'wrath', 'delight', 'anger' ],
      [ 'outifit', 'garb', null ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'fond', 'averse', 'enamored' ],
    ];
    leftJoins(hashMap1,hashMap2).map((item, idx)=>{
      expect(item).toEqual(arr[idx]);
    });
  });
  it('should return a null for a vlaue that does not exist in the another hashMap',()=>{
    let hashMap1 = new HashMap(1024);
    let hashMap2 = new HashMap(1024);

    hashMap1.add('fond','enamored');
    hashMap1.add('wrath','anger');
    hashMap1.add('diligent','employed');
    hashMap1.add('outifit','garb');
    hashMap1.add('guide','usher');

    hashMap2.add('fond','averse');
    hashMap1.add('wrath','delight');
    hashMap2.add('diligent','idle');
    hashMap2.add('guide','follow');
    hashMap2.add('flow','jam');
    let arr = [
      [ 'wrath', 'delight', 'anger' ],
      [ 'outifit', 'garb', null ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'fond', 'averse', 'enamored' ],
    ];
    leftJoins(hashMap1,hashMap2).map((item, idx)=>{
      expect(item).toEqual(arr[idx]);
    });
  });
});