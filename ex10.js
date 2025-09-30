// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = function (sentence) {
  if (sentence.includes(" ") && sentence.includes("_")) {
    const sentenceArray = sentence.split(" ");
    const camelCaseArray = sentenceArray.map((element) => {
      if (element === sentenceArray[0]) {
        return element;
      } else {
        return `${element[0].toUpperCase()}${element.slice(1)}`;
      }
    });
    const camelCase = camelCaseArray.join("");
    const sentenceArray2 = camelCase.split("_");
    const camelCaseArray2 = sentenceArray2.map((element) => {
      if (element === sentenceArray2[0]) {
        return element;
      } else {
        return `${element[0].toUpperCase()}${element.slice(1)}`;
      }
    });
    const finalResult = camelCaseArray2.join("");
    return finalResult;
  } else if (sentence.includes(" ")) {
    const sentenceArray = sentence.split(" ");
    const camelCaseArray = sentenceArray.map((element) => {
      if (element === sentenceArray[0]) {
        return element;
      } else {
        return `${element[0].toUpperCase()}${element.slice(1)}`;
      }
    });
    const camelCase = camelCaseArray.join("");
    return camelCase;
  } else if (sentence.includes("_")) {
    const sentenceArray = sentence.split("_");
    const camelCaseArray = sentenceArray.map((element) => {
      if (element === sentenceArray[0]) {
        return element;
      } else {
        return `${element[0].toUpperCase()}${element.slice(1)}`;
      }
    });
    const camelCase = camelCaseArray.join("");
    return camelCase;
  }
};

console.log(convertToCamelCase("hello world")); // Expected output: "helloWorld"
