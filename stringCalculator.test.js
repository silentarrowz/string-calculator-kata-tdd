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
    test("addition of '1\n2,3' to equal 6", () => {
        expect(stringCalculator("1\n2,3")).toBe(6);
    });
    test("addition of '//;\n1;2' to equal 3", () => {
        expect(stringCalculator("//;\n1;2")).toBe(3);
    });    
    test("should throw an error if called with  one or more -ve numbers", () => {
        expect(() => {
            stringCalculator("2,-5,3,-4");
        }).toThrow("negative numbers not allowed -5,-4");
      })
});