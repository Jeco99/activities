describe('SampleTest', () => {
    it('___RE_SE_AL_CS_OO_DS_SL___CircumferenceSample', () => {
      const diameter =19
      const rotation = 457752
      let res = new odometer(diameter,rotation)
      const exp = 59.69
      assert.deepStrictEqual(res.circumference(),exp)
    })
    it('___RE_SE_AL_CS_OO_DS_SL___OdometerSample', () => {
      const diameter =19
      const rotation = 457752
      let res = new odometer(diameter,rotation)
      const exp = "[0][0][0][6][9][4]"
      assert.deepStrictEqual(res.calculate(),exp)
    })
    
    
    it('___RE_SE_AL_CS_OO_DS_SL___CircumferenceSample2', () => {
      const diameter =12
      const rotation = 1000000
      let res = new odometer(diameter,rotation)
      const exp = 37.7 
      assert.deepStrictEqual(res.circumference(),exp)
    })
    it('___RE_SE_AL_CS_OO_DS_SL___OdometerSample2', () => {
      const diameter =12
      const rotation = 1000000
      let res = new odometer(diameter,rotation)
      const exp = "[0][0][0][9][5][8]"
      assert.deepStrictEqual(res.calculate(),exp)
    })
    
    
    
    
    })
    
    
    