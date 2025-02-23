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

const nestedArray = [
    6410,
    2831,
    5049,
    7554,
    [
      8707,
      6940,
      9517,
      7565,
      7522,
      9242,
      7972,
      7064,
      3441,
      [
        9960,
        4966,
        9368,
        1634,
        5150,
        3709,
        6660,
        [
          7155, 8056, 7834,
          2639, 6601, 8063,
          2390, 2544, 7022
        ]
      ],
      2385,
      573,
      656,
      733,
      1620,
      3626,
      [
        6274,
        1935,
        [ 6481, 928, 8291, 3196, 3431, 6058 ],
        8010,
        5052,
        892,
        3490,
        2369,
        951,
        1606,
        6763,
        7260,
        6122
      ]
    ],
    5655,
    4223
  ];

const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
