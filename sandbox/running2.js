console.log("It worked!!!")
// ctrl/ is the shortcut for comment toggling
const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;

//` <-- allow you to do formatted strings
//`some string ${myApples}` <-- An example of a formatted string, variables are surrounded by {} and preceeded by a $