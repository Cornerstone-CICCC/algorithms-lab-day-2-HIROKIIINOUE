// Exercise 15: Write a recursive function `findMax` that takes an array of numbers
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

const findMax = function (numbers) {
  const descNumbers = numbers.sort((a, b) => b - a);
  const maxNumber = descNumbers[0];
  return maxNumber;
};

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9
