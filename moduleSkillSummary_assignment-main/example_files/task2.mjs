import nestedArray from './arrays.json' assert { type: 'json' };

function flattenArray(array) {
    let result = [];

    function flatten(array1) {
        for (let item of array1) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        }
    }
    flatten(array);
    return result;
}

const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
