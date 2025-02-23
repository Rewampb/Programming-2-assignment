//function that returns square of a number
function square(number) {
    return number * number;
}

//A function that returns a length in mm assuming it has been given a length in inches.
function inchesToMillemeters(inches) {
    const conversionRate = 25.4;
    return inches * conversionRate;
}

//A function that returns the root of a number
const squareRoot = (num, precision = 0) => {
    if (num <= 0) {
        return 0;
    };
    let res = 1;
    const deviation = 1 / (10 ** precision);
    while (Math.abs(num - (res ** 2)) > deviation) {
        res -= ((res ** 2) - num) / (2 * res);
    };
    return Math.round(res * (10 ** precision)) / (10 ** precision);
};
