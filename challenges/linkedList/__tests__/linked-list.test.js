

const Node = require('../lib/node.js');
const LinkedList = require('../lib/linked-list.js');

describe('Node Module',()=>{
  it('cheak node',()=>{
    let value = 'Test1 Node';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});

describe('linked-list Module',()=>{
  it('can successfully instantiate an empty linked list',()=>{
    let linkList = new LinkedList();
    expect(typeof linkList).toBe('object');
    expect(linkList.head).toBeNull();
  });
  it('Can properly insert into the linked list >> insert() method',()=>{
    let value = 'Test2 Node';
    let linkList = new LinkedList;
    linkList.insert(value);
    expect(linkList.head.value).toEqual(value);
    expect(linkList.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list',()=>{
    let value1 = 'VALUE 1';
    let value2 = 'VALUE 2';
    let linkList = new LinkedList;
    linkList.insert(value2);
    linkList.insert(value1);
    expect(linkList.head.value).toEqual(value1);
    expect(linkList.head.next.value).toEqual(value2);
    expect(linkList.head.next.next).toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list',()=>{
    let value1 = 'VALUE 1';
    let value2 = 'VALUE 2';
    let value3 = 'VALUE 3';
    let value4 = 'VALUE 4';
    let linkList = new LinkedList;
    linkList.insert(value4);
    linkList.insert(value3);
    linkList.insert(value2);
    linkList.insert(value1);
    expect(linkList.head.value).toEqual(value1);
    expect(linkList.head.next.value).toEqual(value2);
    expect(linkList.head.next.next.value).toEqual(value3);
    expect(linkList.head.next.next.next.value).toEqual(value4);
    expect(linkList.head.next.next.next.next).toBeNull();
  });
  it('Will return true when finding a value within the linked list that exists',()=>{
    let linkList = new LinkedList;
    let testArray = [ false, 'Test3 Node', 5];
    testArray.forEach(item=>{
      linkList.insert(item);
    });
    expect(linkList.includes(5)).toBeTruthy();
    expect(linkList.includes(false)).toBeTruthy();
    expect(linkList.includes('Test3 Node')).toBeTruthy();

  });
  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let linkList = new LinkedList;
    let testArray = [ false, 'Test3 Node', 5];
    testArray.forEach(item=>{
      linkList.insert(item);
    });
    expect(linkList.includes(15)).toBeFalsy();
    expect(linkList.includes('helloo')).toBeFalsy();
    expect(linkList.includes('Test4 Node')).toBeFalsy();

  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let linkList = new LinkedList;
    let testArray = [ 'My', 'Name', 'Is','Qusai'];
    testArray.forEach(item=>{
      linkList.insert(item);
    });
    expect(linkList.toString()).toEqual('[object Object]');
  });
});

