const bracktesTest = require('../lib/multi-bracket-validation.js');

describe('Bracket-Validation-Test',()=>{
  it('should return a true representing whether or not the brackets in the string are balanced.',()=>{
    expect(bracktesTest('{}')).toBeTruthy();
    expect(bracktesTest('{}(){}')).toBeTruthy();
    expect(bracktesTest('()[[ExtraCharacters]]')).toBeTruthy();
    expect(bracktesTest('(){}[[]]')).toBeTruthy();
    expect(bracktesTest('{}{Code}[Fellows](())')).toBeTruthy();
    expect(bracktesTest('({[]})')).toBeTruthy();

  });
  it('should return a false representing whether or not the brackets in the string are balanced.',()=>{
    expect(bracktesTest('[({}]	')).toBeFalsy();
    expect(bracktesTest('(](')).toBeFalsy();
    expect(bracktesTest('{(})')).toBeFalsy();
    expect(bracktesTest('{')).toBeFalsy();
    expect(bracktesTest(']')).toBeFalsy();
    expect(bracktesTest('(}')).toBeFalsy();
  });
});
