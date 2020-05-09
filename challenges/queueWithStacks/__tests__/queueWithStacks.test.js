

const QueuesAndStacks = require('../lib/queueWithStacks.js');

describe('QueueWithStacks Module', ()=>{
  it('it should be an empty object',()=>{
    let pseudoQueue = new QueuesAndStacks();
    expect(pseudoQueue.front.top).toBeNull();
    expect(pseudoQueue.rear.top).toBeNull();
    pseudoQueue.enqueue('qusai');
    expect(pseudoQueue.front.top.value).toEqual('qusai');
    expect(pseudoQueue.front.top.next).toBeNull();
    expect(pseudoQueue.rear.top).toBeNull();
  });
  it('it should add a Node to the end of Queue by using enqueue()',()=>{
    let pseudoQueue = new QueuesAndStacks();
    let array = [1, 2, 3, 4];
    array.forEach(itme=>{
      pseudoQueue.enqueue(itme);
    });
    expect(pseudoQueue.front.top.value).toEqual(array[0]);
    expect(pseudoQueue.rear.top.value).toEqual(array[1]);
    expect(pseudoQueue.rear.top.next.value).toEqual(array[2]);
    expect(pseudoQueue.rear.top.next.next.value).toEqual(array[3]);
    expect(pseudoQueue.rear.top.next.next.next).toBeNull();
  });
  it('it should delete a Node from the end of Queue by using dequeue()',()=>{
    let pseudoQueue = new QueuesAndStacks();
    pseudoQueue.enqueue('itme');
    pseudoQueue.enqueue('itme2');
    pseudoQueue.enqueue('itme3');
    pseudoQueue.dequeue();
    expect(pseudoQueue.front.top.value).toEqual('itme');
    expect(pseudoQueue.front.top.next).toBeNull();
    expect(pseudoQueue.rear.top.next).toBeNull();

  });
  it('it should delete a Node from the end of Queue by using dequeue()',()=>{
    let pseudoQueue = new QueuesAndStacks();
    let array = [1, 2, 3, 4];
    array.forEach(itme=>{
      pseudoQueue.enqueue(itme);
    });
    expect(pseudoQueue.front.top.value).toEqual(array[0]);
    expect(pseudoQueue.rear.top.value).toEqual(array[1]);
    expect(pseudoQueue.rear.top.next.value).toEqual(array[2]);
    expect(pseudoQueue.rear.top.next.next.value).toEqual(array[3]);
    expect(pseudoQueue.rear.top.next.next.next).toBeNull();

    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.front.top.value).toEqual(array[0]);
    expect(pseudoQueue.rear.top.value).toEqual(array[1]);
    expect(pseudoQueue.rear.top.next).toBeNull();

  });
});