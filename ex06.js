// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = function (URL) {
  const queryParametersList = URL.split("?")[1].split("&");
  const result = {};

  queryParametersList.forEach((element) => {
    const key = element.split("=")[0];
    const value = element.split("=")[1];
    result[key] = value;
  });
  return result;
};

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
