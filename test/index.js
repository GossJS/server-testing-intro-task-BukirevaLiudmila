const countLength = require('../bundle').countLength;
const chai = require('chai');
chai.should();

const tests = [
    {
        val: 'qwerty',
        res: '6',
    },
    {
        val: '',
        res: '0',
    },
    {
        val: '012345678',
        res: '9',
    },
    {
        val: 'ok',
        res: '2',
    }
];

describe('сountLength function testing', () => {
    for (let i = 0; i < tests.length; i++) {
        it('Test №' + (i + 1), () => {
            countLength({ query: tests[i].val }).should.equal(tests[i].res);
        });
    }
});