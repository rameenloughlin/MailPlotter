

const validateUserInput = require('../src/utils').validateUserInput;


let userInput;

describe('Utils Tests', () => {



    describe('Input Formats', () => {

        describe('basic checks', () => {
            test('User Input String is empty', () => {
                expect(validateUserInput("")).toBeFalsy();
            });
            test('User Input is not defined', () => {
                expect(validateUserInput()).toBeFalsy();
            });
            test('User Input is missing opening bracket', () => {
                expect(validateUserInput("5x5 )")).toBeFalsy();
            });
            test('User Input is missing closing bracket', () => {
                expect(validateUserInput("5x5 (")).toBeFalsy();
            });
        });

        describe('grid check', () => {
            test('User Input is opening character is not an integer', () => {
                expect(validateUserInput("zx5")).toBeFalsy();
            });
            test('User Input doesnt contain x in dimensions definiton', () => {
                expect(validateUserInput("5z5 (1, 3) (4, 4)")).toBeFalsy();
            });
            test('User Input is 3rd character is not an integer', () => {
                expect(validateUserInput("5xz (1, 3) (4, 4)")).toBeFalsy();
            });
            test('User Input is third character is larger than 5', () => {
                expect(validateUserInput("5x29 (1, 3) (4, 4)")).toBeFalsy();
            });
        });

        describe('coord check', () => {
            test('User Input with 1 drop-off accepted', () => {
                expect(validateUserInput("5x5 (1, 3)")).toBeTruthy();
            });
            test('User Input with 2 drop-off accepted', () => {
                expect(validateUserInput("5x5 (1, 3) (4, 4)")).toBeTruthy();
            });
            test('User Input has no integer in 1st drop-off co-ordinate', () => {
                expect(validateUserInput("5x5 (z, 3) (4, 4)")).toBeFalsy();
            });
            test('User Input missing comma in 1st drop-off co-ordinate', () => {
                expect(validateUserInput("5x5 (1 3) (4, 4)")).toBeFalsy();
            });
            test('User Input missing space between x and y of 1st drop-off co-ordinate', () => {
                expect(validateUserInput("5x5 (1,3) (4, 4)")).toBeFalsy();
            });
            test('User Input missing space between Drop-off co-ordinates brackets', () => {
                expect(validateUserInput("5x5 (1, 3)(4, 4)")).toBeFalsy();
            });
        });
    });

});











