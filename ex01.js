// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function (sentence) {
  const sentenceArray = sentence.split(" ");
  const capitalizedArray = sentenceArray.map((element) => {
    return `${element[0].toUpperCase()}${element.slice(1)}`;
  });

  const result = capitalizedArray.join(" ");

  return result;
};

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
