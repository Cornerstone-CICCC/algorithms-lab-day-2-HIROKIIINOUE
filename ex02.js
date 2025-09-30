// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

const arrayDifference = function (firstArray, secondArray) {
  const onlyFirstArray = [];

  firstArray.forEach((firstElement) => {
    const existSecondArray = secondArray.includes(firstElement);
    if (!existSecondArray) {
      onlyFirstArray.push(firstElement);
    }

    return onlyFirstArray;
  });

  return onlyFirstArray;
};

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]
