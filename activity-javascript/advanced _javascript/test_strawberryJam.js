describe('Strawberry Jam', () => {
    it('___AL_CS_SE_EH___Sample Test Case 1', () => {
      const orders = 8
      const cash = 500
      const expected ="Change: 220"
      assert.equal(Strawberry(orders,cash),expected)
    })
    it('___AL_CS_SE_EH___Sample Test Case 2', () => {
      const orders = 6
      const cash = 200
      const expected ="Change: 0"
      assert.equal(Strawberry(orders,cash),expected)
    })
    
    it('___AL_CS_SE_EH___Sample Test Case 3', () => {
      const orders = 15
      const cash = 200
      const expected ="Insufficient Funds"
      assert.equal(Strawberry(orders,cash),expected)
    })
    
    it('___AL_CS_SE_EH___Sample Test Case 4', () => {
      const orders = 1
      const cash = 39
      const expected ="Insufficient Funds"
      assert.equal(Strawberry(orders,cash),expected)
    })
    
    })
    
    