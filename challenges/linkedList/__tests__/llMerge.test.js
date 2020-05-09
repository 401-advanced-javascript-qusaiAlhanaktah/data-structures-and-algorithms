const LinkedList = require('../llMerge/linked-list.js');
const merge = require('../llMerge/llMerge.js');

describe('Edge cases', () => {

  test('Returns null if both lists empty', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    expect(merge( list1, list2 )).toEqual(null);

  });

  test('Returns list 2 if list 1 empty', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    list2.insert(10);
    expect(list2.head.value).toEqual(10);
    expect(merge(list1, list2)).toEqual(list2);

  });

  test('Returns list 1 if list 2 empty', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    list1.insert(10);
    expect(list1.head.value).toEqual(10);
    expect(merge(list1, list2)).toEqual(list1);

  });

});

describe('populated Lists are merged', () => {

  function setup ( array, list ) {
    array.forEach( value => list.insert( value ) );
  }

  function testIt ( list1, list2, answer ) {
    expect( merge( list1, list2 ).show() ).toEqual( answer );
  }

  test('Merges if list 1 equal list 2', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let array1 = [ 1,2,3,4,5 ];
    let array2 = [ 'a','b','c','d','e' ];
    let answer = '5 e 4 d 3 c 2 b 1 a';

    setup(array1, list1);
    setup(array2, list2);

    testIt( list1, list2, answer );

  });

  test('Merges if List 2 is larger', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let array1 = [ 1,2,3,4,5 ];
    let array2 = [ 'a','b','c','d','e','f','g','h' ];
    let answer = '5 h 4 g 3 f 2 e 1 d c b a';

    setup(array1, list1);
    setup(array2, list2);

    testIt( list1, list2, answer );

  });

  test('Merges where list 1 is larger', () => {

    let list1 = new LinkedList;
    let list2 = new LinkedList;

    let array1 = [ 1,2,3,4,5,6,7,8 ];
    let array2 = [ 'a','b','c','d','e' ];
    let answer = '8 e 7 d 6 c 5 b 4 a 3 2 1';

    setup(array1, list1);
    setup(array2, list2);

    testIt( list1, list2, answer );

  });

});
