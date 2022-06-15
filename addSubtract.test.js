let { expect } = require('chai');
let { createCalculator } = require('./addSubtract');

describe('Adding and Subtracting numbers', () => {
    it ('returns an object', () => {
        let calc = createCalculator();
        expect(typeof calc).to.equal('object');
    });

    it ('returns an object with a method called ADD', () => {
        let calc = createCalculator();
        expect(calc.hasOwnProperty('add')).to.equal(true);
    });
});