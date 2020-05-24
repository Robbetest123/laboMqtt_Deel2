const { Gpio } = require('onoff')
const shell = require('shelljs')

class GPIO {
    constructor() {
        //console.log('GPIO helper created!')
        this.relais = new Gpio(23, 'out')
        this.mypin = new Gpio(17, 'in','both')
        /** 3 inputs */
        this.inputs = []
    }  

    readInputs() {
         const result = []
        this.inputs.forEach((el, index) => {
            result.push({ index, value: el.readSync() })
        })
        
        return result
    }

}

exports.default = new GPIO()