const f = require('./oddNumberOut');
const { inspect } = require('util');
//let mocha = require('mocha');
const expect = require('chai').expect;

describe('Test objects', function() {
  const n = [ 1, 1, 3, 5, 1, 7, 5 ]
  const s = [ 'a', 'b', 'b', 'c', 'aa', 'c', 'd', 'c', 'bb' ]
  const o = [
    { a: 1, b: 'q' },
    { a: 3, b: 4 },
    { a: 1, b: 'q' },
    { d: 1, e: '2' },
    { d: 1, e: '2' },
    { a: 1, b: 'q' }
  ]
  it('should extract numbers that have an odd number: ' + inspect(n) + ' => ' + inspect(f(n)), () => {
    expect(f(n)).have.members([ 1, 3, 7 ]);
  });
  it('should extract strings that have an odd number: ' + inspect(s) + ' => ' + inspect(f(s)), () => {
    expect(f(s)).has.members([ 'a', 'c', 'aa', 'd', 'bb' ]);
  });
  it('should not extract any objects (objects by ref): ' + inspect(o) + ' should remain the same', () => {
    expect(f(o)).to.be.an('array').that.deep.equals(o);
  });
  it('should get empty for an empty array: [] => []', () => {
    expect(f([])).eqls([]);
  });
  it('should get empty for non-arrays: 1, \'a\', {} => []', () => {
    expect(f(1)).eqls([]);
    expect(f('a')).eqls([]);
    expect(f({})).eqls([]);
  });
});

