function getGrades(inputSelector) {
    const getGrades = document.querySelector(inputSelector).value// get grades from the input box
    const rawGrades = getGrades.split(',');// split them into an array (String.split(','))
    const grades = rawGrades.map(function(grade){
        return grade.trim().toUpperCase();
    });// clean up any extra spaces, and make the grades all uppercase. (Array.map())
    return grades// return grades
  }
  function lookupGrade(grade) {
    if(grade == 'A'){
        return 4
      }if(grade == 'B'){
        return 3
      }if(grade == 'C'){
        return 2
      }if(grade == 'D'){
        return 1
      }if (grade == 'F'){
        return 0
      }
  }
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const points = grades.map(function(grade){return lookupGrade(grade);});
    // calculates the GPA
    const gpa = points.reduce((function(total, num){
            return total + num;
  }))/points.length;
    // return the GPA
    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
  }
  
  function clickHandler() {
    // when the button in our html is clicked
    // get the grades entered into the input
    const grades = getGrades("#grades");
    // calculate the gpa from the grades entered
     const gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, "#output");
  }

  document.querySelector("#submitButton").addEventListener("click", clickHandler);