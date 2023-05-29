var equal = require('assert');
const { basicmath } = require('../basic_Math');


describe('Basic Math Sample Test', () => {
    it('___SE_SL___Subtraction', () => {
      equal(basicmath("10 minus 11 "),-1)
    })
    it('___SE_SL___Addition', () => {
      equal(basicmath("19 plus 12"),31)
    })
    it('___SE_SL___Multiplication', () => {
      equal(basicmath("9 times 15"),135)
    })
    it('___SE_SL___Division', () => {
      equal(basicmath("100 divided by 23.1 "),4.33)
    })    
    })
    