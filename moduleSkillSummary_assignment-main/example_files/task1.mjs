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

//A function that returns the cube of a number
function cube(number) {
    return number * number * number;
}

//A function that returns the area of a circle given the radius
function areaOfCircle(radius) {
    if (radius < 0) {
        return "Radius cannot be negative.";
    }
    const PI = 3.14;
    return PI * radius * radius;
}

//A function that returns a greeting, given a name
function greeting(name) {
    return `Hello, ${name}!`;
}
