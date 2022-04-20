const assert = require('assert');
const calc = require('../models/calc')
suite('[TDD] calculator test', () => {
    test('add two number test', () => {
        const ret = calc.plus(1,2);
        assert.equal(ret, 4); //3
    })
    test('minus two number test', () => {
        const ret = calc.minus(3,2);
        assert.equal(ret, 1);
    })
    test('multiple two number test', () => {
        const ret = calc.multi(3,2);
        assert.equal(ret, 6);
    })
    test('division two number test', () => {
        const ret = calc.divisor(4, 2);
        assert.equal(ret, 2);
    })
})