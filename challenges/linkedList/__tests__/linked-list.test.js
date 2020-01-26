'use strict';

const Node = require('../lib/node.js');
const LinkedList = require('../lib/linked-list.js');

describe('Node Module',()=>{
    it('cheak node',()=>{
        let value = 'Test Node';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    })
});

describe('linked-list Module',()=>{
    it('cheak head',()=>{
        let value = 'Test Node';
        let linkList = new LinkedList(value);
        console.log(linkList)
        console.log(linkList.insert(value))
        let headList = linkList.insert(value)
        expect(headList.head.Node.value).toEqual(value);
        // expect(linkList.next).toBeNull();
    })
})
