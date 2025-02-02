import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }
    const trimmedName = name.trim();
    if (trimmedName === "") {
        return " ";
    }
    const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialCharacter.test(trimmedName)) {
        return null;
    }
    const formattedName = trimmedName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

    return formattedName;
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Formatting name function");
tests.isEqual(formatName(5304), null, "It is not string, should return null");
tests.isEqual(formatName(" peter parker "), "Peter Parker", "Remove whitespace and capitalize the letter");
tests.isEqual(formatName(" "), " ", "Return an empty string");
tests.isEqual(formatName("Peter@Parker"), null, "It contain special character, return null");


//#endregion
