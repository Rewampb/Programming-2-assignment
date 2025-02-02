import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (!Number.isInteger(target) || !Number.isInteger(guess)) {
        return null;
    }

    if (guess < target) {
        return "Too low";
    }
    else if (guess > target) {
        return "Too high";
    }
    else {
        return "Correct!";
    }
}


//#endregion

//#region Tests --------------------------------------------------------------------

//#region Tests --------------------------------------------------------------------
const tests = test("Guess Number");
// Basic cases
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");
// Invalid inputs
tests.isEqual(guessNumber("10", 10), null, "Input in target parameter is string, return null");
tests.isEqual(guessNumber(10, "10"), null, "Input in guess parameter is string, return null");
// Edge cases
tests.isEqual(guessNumber(10, 3.14), null, "Input in guess parameter is not integer, return null");
//#endregion
