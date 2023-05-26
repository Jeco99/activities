describe('Test', () => {
    it('___RE_SE_AL_CS_OO_DS_SL___SampleTest1', () => {
      const res = new notepad()
        res.addText(72)
        res.addText(101)
        res.addText(108)
        res.addText(112)
        res.addText(115)
        res.moveLeft()
        res.delete()
        res.addText(108)
        res.addText(111)
        res.moveRight()
        res.delete()
        let exp = "Hello"
    
      assert.deepStrictEqual(res.enter(),exp)
    })
    
    it('___RE_SE_AL_EH_CS_OO_DS_SL___SampleTest2_Error', () => {
        const res = new notepad()
        res.delete()
        let exp = "Delete error"
      assert.deepStrictEqual(res.delete(),exp)
    })
    
    it('___RE_SE_AL_EH_CS_OO_DS_SL___SampleTest3_Deleted', () => {
        const res = new notepad()
        res.addText(83)//"S"
        res.addText(32)//"*Space*"
        res.delete()
        let exp = "Deleted"
        
      assert.deepStrictEqual(res.delete(),exp)
    })
    
    it('___RE_SE_AL_EH_CS_OO_DS_SL___SampleTest4_moveleft', () => {
        const res = new notepad()
        res.addText(83)//S
        res.addText(107)//k
        res.addText(100)//d
        res.moveLeft()
        //Sk|d
        res.addText(105)//i
        //Skid
        let exp = "Skid"
      assert.deepStrictEqual(res.enter(),exp)
    })
    
    it('___RE_SE_AL_EH_CS_OO_DS_SL___SampleTest4_moveleft_and_right', () => {
        const res = new notepad()
        res.addText(83)
        res.addText(107)
        res.addText(101)
        res.moveLeft()
        res.addText(105)
        res.moveRight()
        res.addText(115)
        let exp = "Skies"
      assert.deepStrictEqual(res.enter(),exp)
    })
    
    
    })
    