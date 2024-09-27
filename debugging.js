const PI = 3.14;
let radius = 3;
let area = 0;
area = circleArea(radius);
console.log("Area 1: ", area);
radius = 4;
area = circleArea(radius);
console.log("Area 2: ", area);

function circleArea(radius) {
  return radius * PI;
}
area = circleArea(3);
console.log("Area 3: ", area);