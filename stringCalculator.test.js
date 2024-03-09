const stringCalculator = require('./stringCalculator');

describe("string addition calculator test cases", () =>{
    test('addition of "4,6" to equal 10', () =>{
        expect(stringCalculator("4,6")).toBe(10);
    });   
});