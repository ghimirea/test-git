const assert = require('chai').assert;
const app = require('../src/sumOfTwoArrays');

describe('Sum of Two Arrays', () => {
  it('Return Type should be an array', () => {
    let arr1 = [1, 2, 5];
    let arr2 = [3, 4, 5];
    assert.typeOf(app(arr1, arr2), 'array');
  });
  it('arr1.length = arr2.length', () => {
    let arr1 = [1, 2, 5];
    let arr2 = [3, 4, 5];
    assert.deepEqual(app(arr1, arr2), [4, 6, 10]);
  });
  it('arr1.length > arr2.length', () => {
    let arr1 = [1, 2, 5, 7, 8];
    let arr2 = [3, 4, 5];
    assert.deepEqual(app(arr1, arr2), [4, 6, 10, 7, 8]);
  });
  it('arr2.length > arr1.length', () => {
    let arr1 = [1, 2, 5];
    let arr2 = [3, 4, 5, 7, 8];
    assert.deepEqual(app(arr1, arr2), [4, 6, 10, 7, 8]);
  });
  it('arr1.length is undefined', () => {
    let arr1 = [];
    let arr2 = [3, 4, 5, 7, 8];
    assert.deepEqual(app(arr1, arr2), [3, 4, 5, 7, 8]);
  });
  it('arr2.length is undefined', () => {
    let arr1 = [1, 2, 5, 7, 8];
    let arr2 = [];
    assert.deepEqual(app(arr1, arr2), [1, 2, 5, 7, 8]);
  });
  it('Both the arrays are empty', () => {
    let arr1 = [];
    let arr2 = [];
    assert.deepEqual(app(arr1, arr2), []);
  });
});
