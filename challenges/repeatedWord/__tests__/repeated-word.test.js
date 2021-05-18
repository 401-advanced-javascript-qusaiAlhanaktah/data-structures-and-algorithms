/* eslint-disable strict */
'use strict';

const HashMap = require('../repeated-word.js');


describe('It should return the first repeated word in the srting', ()=> {

  it('should return --->>>> a <<<---',()=>{
    let hashMap = new HashMap(1024);

    console.log('***hashmap***', hashMap);
    let str = 'Once upon a time, there was a brave princess who...';
    expect(hashMap.repeatedWord(str)).toEqual('a');
    expect(typeof hashMap.repeatedWord(str)).toBe('string');
  });

  it('should return --->>>> it <<<---',()=>{
    let hashMap = new HashMap(1024);
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(hashMap.repeatedWord(str)).toEqual('it');
    expect(typeof hashMap.repeatedWord(str)).toBe('string');
  });

  it('should return --->>>> summer <<<---',()=>{
    let hashMap = new HashMap(1024);
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(hashMap.repeatedWord(str)).toEqual('summer');
    expect(typeof hashMap.repeatedWord(str)).toBe('string');
  });
});



