// Ex.4 Create a function that takes an array of strings and returns an array with only the
// strings that have numbers in them. If there are no strings containing numbers, return an
// empty array.

function containsNumber(array) {
  let newArray = [];

  for (let element of array) {
    let contains = /\d/.test(element);
    if (contains) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log("******QUESTION 4******");
console.log(containsNumber(["hello1", "2", "223h", "world", "4567457"]));
