const stringCalculator = require('./stringCalculator');

describe("string addition calculator test cases", () =>{
    test('addition of "4,6" to equal 10', () =>{
        expect(stringCalculator("4,6")).toBe(10);
    });   
    test("addition of no argument provided to equal 0", () => {
        expect(stringCalculator("")).toBe(0);
    });
    test("addition of '1' to equal 1", () => {
        expect(stringCalculator("")).toBe(0);
    });
    test("addition of 5, 6, 7, 8 to equal 26", () => {
        expect(stringCalculator("5,6,7,8")).toBe(26);
    });
});