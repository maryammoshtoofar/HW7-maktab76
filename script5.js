// Ex.5 Implementation filter

function myFilter(arr, Func) {
  const Filtered = [];
  for (let element in arr) {
    const result = Func(arr[element], element, arr);
    if (result) Filtered.push(arr[element]);
  }
  return Filtered;
}

console.log("******QUESTION 5******");
console.log("Filter method");
console.log(myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0)); //[2,4]

// Ex.5 Implementation find
function myFind(arr, callback) {
  for (let element in arr) {
    const result = callback(arr[element], element, arr);
    if (result) return arr[element];
  }
}
console.log("Find method");
console.log(myFind([4, 12, 16, 20, 22], (num) => num > 18)); //20

// Ex.5 Implementation slice

function mySlice(arr, start, end) {
  let stop = arr.length - 1;
  const Sliced = [];
  if (start < 0) start = start + arr.length;
  if (end !== undefined && end > 0) {
    stop = end - 1;
  }
  for (let index = start; index <= stop; index++) {
    let element = arr[index];

    Sliced.push(element);
  }
  return Sliced;
}
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("slice method");
console.log(mySlice(fruits, 1, 3)); //["Orange", "Lemon"]

// Ex.5 Implementation splice

function mySplice(array, start, deleteCount, ...items) {
  let spliced = [];
  let stop = array.length;

  function duplicate(result, main) {
    for (let index = 0; index < result.length; index++) {
      main[index] = result[index];
    }
    main.length = result.length;
  }

  if (start < 0) {
    start = start + array.length;
  }

  if (deleteCount) {
    stop = start + deleteCount;
    if (deleteCount < 0) stop = 0;
  }

  for (let i = start; i < stop; i++) {
    const element = array[i];
    spliced.push(element);
  }

  if (deleteCount && items.length <= 0) {
    let deleteArr = [];

    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if (i === start) {
        i = stop - 1;
      } else {
        deleteArr.push(element);
      }
    }

    duplicate(deleteArr, array);
  }

  if (items.length > 0) {
    let gatherArr = [];

    for (let i = 0; i < array.length; i++) {
      let elem = array[i];
      if (i === start) {
        gatherArr = [...gatherArr, ...items];
        i = stop - 1;
      } else {
        gatherArr.push(elem);
      }
    }
    duplicate(gatherArr, array);
  }
  return spliced;
}

mySplice(fruits, 1, 2, "Kiwi", "Coconut");
console.log("splice method");
console.log(fruits); //['Banana', 'Kiwi', 'Coconut', 'Apple', 'Mango']

// array.some(function(value, index, arr), this)

function mySome(arr, callback) {
  const { length } = arr;

  for (let index = 0; index < length; index += 1) {
    const value = arr[index];

    if (callback(value, index, arr)) {
      return true;
    }
  }
  return false;
}
console.log("Some method");
console.log(mySome([1, 2, 3, 4, 5], (num) => num % 2 === 0)); //true
console.log(mySome([1, 2, 3, 4, 5], (num) => num === 0)); //false
