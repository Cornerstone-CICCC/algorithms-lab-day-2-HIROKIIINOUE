// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function (array) {
  const length = array.length;
  const firstNumber = array[0];
  const lastNumber = array[length - 1];
  const idealArray = [];

  let count = 1;

  const result = array.filter((element) => {
    if (element !== count) {
      return count;
    }
    count++;
  });

  console.log(result);
};

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
