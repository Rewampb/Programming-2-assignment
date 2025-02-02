import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply(...theArgs) {
    let total = 1;
    for (let arg of theArgs) {
        if (typeof arg === "string" && !isNaN(Number(arg))) {
            arg = Number(arg);
        }
        if (typeof arg !== 'number' || isNaN(arg)) {
            return NaN;
          }
        total *= arg;
    }
    return total;
}
//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Multiply function");
tests.isEqual(multiply(2, 3), 6, "Multiplication of 2 and 3 should be 6");
tests.isEqual(multiply("2", 5), 10, 'Sum of "2" and 3 should be 10');
tests.isNotANumber(multiply("coke", 3), 'Multiplication of "2" and 3 should return NaN');
tests.isNotANumber(multiply(0, Infinity), 'Multiplication of 0 and Infinity should return NaN');
tests.isEqual(multiply(0, 5), 0, "Multiplication of 0 and 5 should be 0");
tests.isEqual(multiply(2, Infinity), Infinity, "Multiplication of 2 and Infinity should be Infinity");
tests.isEqual(multiply(2, -Infinity), -Infinity, "Multiplication of 2 and -Infinity should be -Infinity");
//#endregion
