//* You get an array of numbers, return the sum of all of the positives ones.
//* Example  [1, -4, 7, 12] =>  1 + 7 + 12
//* Note If there is nothing to sum, the sum is default to 0.
let positiveSum = (arr) => {
    let result = 0;
    for (element of arr) {
        if (element > 0) {
            result += element;
        }
    }
    return result;
}
console.log(positiveSum([86, 33, -13, 5, 23, 10, -98, -27, 7, -77, -20, -37, -97, 52, 97, -95, -90, 2, -18, 53, -26, 20, -30, -19, 86, 27, 65, -51, -90, 22, -66, 79, -61, 57, -4, 41, 38, 64, -37, 30, 81, 75, -48, -96, -75, -82, -52, -31, 53, 74, -8, -97, 52, -15, -63, 49, 17, -46, 19, 66, 40, -34]));