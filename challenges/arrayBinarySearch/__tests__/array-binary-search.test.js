'use strict';

let bainary = require('../lib/array-binary-search')

describe('return an index of an item',()=>{
    it('return a specific index of the item',()=>{
        expect(bainary.BinarySearch([4,8,15,16,23,42], 15)).toBe(2);
    });
    it('return a falsy value for the item which does not exist in the array',()=>{
        expect(bainary.BinarySearch([11,22,33,44,55,66,77], 90)).toBe(-1);
    });
})