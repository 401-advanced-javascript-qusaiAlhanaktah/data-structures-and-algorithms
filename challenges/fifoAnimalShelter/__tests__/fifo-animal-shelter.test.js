// eslint-disable-next-line semi


const Animal = require('../lib/fifo-animal-shelter.js');

describe('Animal-shelter Module', ()=>{
  it('add an animal by using enqueue() method it should return null for any animal except cat & dog', ()=>{
    let animal = new Animal();
    animal.enqueue('rabbit');
    expect(animal.enqueue('rabbit')).toBeNull();
    expect(animal.enqueue('elephent')).toBeNull();
    expect(animal.enqueue('helo')).toBeNull();
  });
  it('add an animal by using enqueue() method', ()=>{
    let animal = new Animal();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('rabbit');
    expect(animal.cat[0].name).toEqual('cat');
    expect(animal.cat[1].name).toEqual('cat');
    expect(animal.cat.length).toEqual(2);
    expect(animal.dog[0].name).toEqual('dog');
    expect(animal.dog.length).toEqual(1);
    expect(animal.enqueue('rabbit')).toBeNull();
  });
  it('delete an animal by using dequeue() method', ()=>{
    let animal = new Animal();
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('rabbit');
    expect(animal.cat[1].name).toEqual('cat');
    expect(animal.cat.length).toEqual(2);
    expect(animal.dog[0].name).toEqual('dog');
    expect(animal.dequeue('cat')[0].name).toEqual('cat');
    expect(animal.dequeue('cat').length).toEqual(0);
    // expect(typeof (animal.dequeue('cat')[0])).toEqual('object');
    expect(animal.dequeue('dog')).toStrictEqual([]);
    expect(animal.dequeue('rabbit')).toBeNull();
  });
});