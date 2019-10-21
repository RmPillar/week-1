const getItem = require('../get-item');
const libraryChai = require('chai');
const expect = libraryChai.expect;

describe('getItem()', function() {
    it('when given index of 0, it returns the first item', function() {
        const actual = getItem(['a', 'b', 'c'],0);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it ('when given index is less than array.length, return item at given index', function() {
        const actual = getItem(['a', 'b', 'c', 'd', 'e'], 3);
        const expected = 'd';
        expect(actual).to.equal(expected);
    });
    it ('When index is equal to array.length, return first array item', function() {
        const actual = getItem(['a', 'b', 'c', 'd', 'e'], 5);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('when index is greater than array.length, return item at array index - length', function() {
        const actual = getItem(['a', 'b', 'c', 'd', 'e'], 6);
        const expected = 'b';
        expect(actual).to.equal(expected);
    });
});