// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = function (sentence) {
  let count = 0;
  const length = sentence.length;
  const sentenceArray = [];

  for (let i = 0; i < length; i++) {
    sentenceArray.push(sentence[i]);
  }

  sentenceArray.forEach((element) => {
    if (
      element === "a" ||
      element === "i" ||
      element === "u" ||
      element === "e" ||
      element === "o" ||
      element === " "
    ) {
      return;
    } else {
      count++;
    }
  });

  return count;
};

console.log(countConsonants("hello world")); // Expected output: 7
