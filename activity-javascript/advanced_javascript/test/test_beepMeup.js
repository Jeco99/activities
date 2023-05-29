var deepStrictEqual = require('assert');
const { Messages } = require('../beepMeup');

describe('ContactOnly Notif', () => {
    it('test___CS___samplecase1', () => {
      deepStrictEqual(Messages(["Stanley","Keanu","Roger","Clarke"]),"Stanley, Keanu and 2 others sent you a message!");
    })
    
     it('test___CS___samplecase2', () => {
      deepStrictEqual(Messages(["Stanley","Geralt","Triss"]), "Stanley, Geralt and Triss sent you a message!");
    })
    it('test___CS___samplecase2', () => {
      deepStrictEqual(Messages(["*random penguin*"]),"No one sent you a message!");
    })
  })
  