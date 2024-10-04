//Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML
//Activity 2
const letterGrade = ['A', 'B', 'A'];
function gradeConversion(step) {
  if(step == 'A'){
    return 4
  }if(step == 'B'){
    return 3
  }if(step == 'C'){
    return 2
  }if(step == 'D'){
    return 1
  }if (step == 'F'){
    return 0
  }}
const gpa = letterGrade.map(gradeConversion);
console.log(gpa);
//Activity 3
const totalPoints = gpa.reduce(function (total, item){
  return total + item;
});
console.log(totalPoints);
//Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruit = fruits.filter((fruit) => fruit.length > 6);
console.log(filteredFruit);
//Activity 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21
const luckyNumberIndex = numbers.indexOf(luckyNumber);
console.log(luckyNumberIndex);