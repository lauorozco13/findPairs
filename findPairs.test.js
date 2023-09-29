const chai = require('chai');
const expect = chai.expect;

const findPairs = require('./findPairs');

describe('findPairs', () => {
    it('should find pairs that sum is equal to the target', () => {
        const input = [1, 9, 5, 0, 20, -4, 12, 16, 7];
        const target = 12;
        const expected = [[12, 0], [16, -4], [7, 5]];

        const result = findPairs(input, target);
        expect(result).to.deep.equal(expected);
    });

    it('should handle negative numbers and zero', () => {
        const input = [-6, -2, 0, 4, 6, 10];
        const target = 4;
        const expected = [[4, 0], [6, -2], [10, -6]];

        const result = findPairs(input, target);
        expect(result).to.deep.equal(expected);
    });

    it('should handle an empty array', () => {
        const input = [];
        const target = 10;
        const expected = [];

        const result = findPairs(input, target);
        expect(result).to.deep.equal(expected);
    });

    it('should handle a target value negative', () => {
        const input = [-1, -2, 3, 4, 5, -6];
        const expected = [[-2, -1], [-6, 3]];
        const target = -3;

        const result = findPairs(input, target);
        expect(result).to.deep.equal(expected);
    });

    it('should handle a target value of zero', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [];
        const target = 0;

        const result = findPairs(input, target);
        expect(result).to.deep.equal(expected);
    });

    it('should ignore NaN data', () => {
        const input = [1, 2, 3, 4, 'p', 5, 6];
        const expected = [[5, 3], [6, 2]];
        const target = 8;

        const result = findPairs(input, target);
        expect(result).to.deep.equal(expected);
    });
});