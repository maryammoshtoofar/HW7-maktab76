// Ex.1
// Your task is to create a Circle constructor that creates a circle with a radius provided by an
// argument. The circles constructed must have two methods getArea() (PI*r^2) and
// getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

function Circle(r) {
  this.getArea = () => `Area = ${(Math.PI * Math.pow(r, 2)).toFixed(5)}`;
  this.getPerimeter = () => `Perimeter = ${(Math.PI * 2 * r).toFixed(5)}`;
}

const myCircle = new Circle(5);
console.log("******QUESTION 1******");
console.log(myCircle.getArea(5));
console.log(myCircle.getPerimeter(5));

// Ex.2
// Create a function that identifies the very first item that has recurred in the string
// argument passed. It returns the identified item with the index where it first appeared and
// the very next index where it resurfaced -- entirely as an object; or as an empty object if the
// passed argument is either null, undefined, empty string, or no recurring item exists.
// recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
// recurIndex("") ➞ {}
// recurIndex(null) ➞ {}

function recurIndex(str) {
  if (!str) return {};
  let array = str.split("");
  const duplicates = array.filter(
    (item, index) => array.indexOf(item) !== index
  );
  const [item] = duplicates;
  const firstIndex = str.split(item, 1).join().length;
  const secondIndex = str.split(item, 2).join().length;
  if (!item) return {};
  return { [item]: [firstIndex, secondIndex] };
}

console.log("******QUESTION 2******");
console.log(recurIndex("AREDCBSDERD"));
console.log(recurIndex(""));
console.log(recurIndex(null));
