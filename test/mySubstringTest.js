const assert = require('chai').assert;
const app = require('../src/mySubstring');

describe('My Substring', () => {
  it('Returns a string', () => {
    let string = 'This is string';
    let firstnum = 5;
    let secondnum = 10;
    assert.typeOf(app(string, firstnum, secondnum), 'string');
  });
  it('Returns "is st"', () => {
    let string = 'This is string';
    let firstnum = 5;
    let secondnum = 10;
    assert.equal(app(string, firstnum, secondnum), 'is st');
  });
  it('Returns "is string"', () => {
    let string = 'This is string';
    let firstnum = 5;
    let secondnum;
    assert.equal(app(string, firstnum, secondnum), 'is string');
  });
  it('Returns null if no string is mentioned', () => {
    let string = '';
    let firstnum = 5;
    let secondnum = 10;
    assert.equal(app(string, firstnum, secondnum), '');
  });
  it('Returns null if no params are mentioned', () => {
    let string = 'This is string';
    let firstnum;
    let secondnum;
    assert.equal(app(string, firstnum, secondnum), 'This is string');
  });
  it('Returns from the start to second param', () => {
    let string = 'This is string';
    let firstnum;
    let secondnum = 10;
    assert.equal(app(string, firstnum, secondnum), 'This is st');
  });
});
