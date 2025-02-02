import test from "./test.mjs";

/*
    Challenge: Implement the `sequence` function.

    Your task:
    1. Write a function `sequence` that passes the tests below.
    2. The function should handle various edge cases, including invalid inputs.

    Good luck!
*/

function sequence(n) {

}

//#region Tests --------------------------------------------------------------------
const tests = test("Sum function");

// Basic cases
tests.isEqual(sequence(0), 0, "For n = 0, the function should return 0");
tests.isEqual(sequence(1), 1, "For n = 1, the function should return 1");
tests.isEqual(sequence(2), 1, "For n = 2, the function should return 1");
tests.isEqual(sequence(3), 2, "For n = 3, the function should return 2");
tests.isEqual(sequence(4), 3, "For n = 4, the function should return 3");
tests.isEqual(sequence(5), 5, "For n = 5, the function should return 5");
tests.isEqual(sequence(6), 8, "For n = 6, the function should return 8");
tests.isEqual(sequence(10), 55, "For n = 10, the function should return 55");

// Large input
tests.isEqual(sequence(20), 6765, "For n = 20, the function should return 6765");

// Edge cases
tests.isEqual(sequence(-1), null, "Negative input should return null");
tests.isEqual(sequence(1.5), null, "Non-integer input should return null");
tests.isEqual(sequence("5"), null, "String input should return null");
tests.isEqual(sequence(null), null, "Null input should return null");

//#endregion