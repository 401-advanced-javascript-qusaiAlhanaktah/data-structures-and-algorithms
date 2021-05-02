/* eslint-disable new-cap */
/* eslint-disable no-undef */

MergeSort = require('../MergeSort.js');

describe('MergeSort Module', ()=>{
  it('return a sorted array if the input is Reverse-sorted',()=>{

    expect(MergeSort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
  });
  it('return a sorted array if the input is Few uniques',()=>{
    expect(MergeSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);

  });
  it('return a sorted array if the input is Nearly-sorted',()=>{
    expect(MergeSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });
});