var equal = require('assert');
const { sinking } = require('../boatSinking');

describe('The_Boat_is_Sinking_Sample_Test', () => {
    it('___SE_DS___Sample_Test1', () => {
      const participant = 32
      const rounds = [3,24,2,6,1,3,5]
      const exp = 20
      equal(sinking(participant,rounds),exp)
    })
    it('___SE_DS___Sample_Test2', () => {
      const participant = 165
      const rounds = [32,23,2,3,51,21,23]
      const exp = 69
      equal(sinking(participant,rounds),exp)
    })
    it('___SE_DS___Sample_Test3', () => {
      const participant = 22
      const rounds = [1,1,1,1,2,2,2,3,4,5,3]
      const exp = 18
      equal(sinking(participant,rounds),exp)
    })
    it('___SE_DS___Sample_Test4', () => {
      const participant = 62
      const rounds = [60,59,56,45,32,22,11,4]
      const exp = 20
      equal(sinking(participant,rounds),exp)
    })
    
    
    })
    