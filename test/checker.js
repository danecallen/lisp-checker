const { check } = require('../lib/checker')
const { expect } = require('chai')

describe('The LISP Checker', () => {

    it('reports valid when a string is properly formatted ', () => {
        const input = `(list 1 2 (quote foo))`;
        expect(check(input)).to.equal(true)
    })

    it('reports invalid when a string is properly formatted ', () => {
        const input = `(list) 1 2) (quote foo))`;
        expect(check(input)).to.equal(false)
    })
});