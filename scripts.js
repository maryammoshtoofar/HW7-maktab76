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
