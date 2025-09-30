// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

const sortByProperty = function (data, sortKey) {
  const dataList = data;
  if (sortKey === "name") {
    dataList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortKey === "age") {
    dataList.sort((a, b) => a.age - b.age);
  }

  return dataList;
};

console.log(
  sortByProperty(
    [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
    "age"
  )
); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]
