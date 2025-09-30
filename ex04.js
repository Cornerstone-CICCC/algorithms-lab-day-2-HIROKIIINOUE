// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function (character) {
  const length = character.length;
  const array = [];
  const object = {};
  for (let i = 0; i < length; i++) {
    array.push(character[i]);
  }

  array.forEach((element) => {
    if (!object[element]) {
      object[element] = 1;
    } else {
      object[element]++;
    }
  });

  const newArray = [];

  return object.length;
  // const uniqueLetter = new Set(array);
  // const uniqueLetterArray = [...uniqueLetter];
};

console.log(mostFrequentChar("javascript")); // Expected output: "a"
