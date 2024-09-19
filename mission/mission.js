const themeSelector = document.querySelector("#theme-select");
console.dir(themeSelector); // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
var body = document.querySelector("body");
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const selectValue = themeSelector.value;
if (selectValue == 'dark')
{
    body.classList.add('dark');
    document.querySelector('img').src = "byui-logo_white.png";
}
else if (selectValue == 'light'){
    body.classList.remove('dark');
    document.querySelector('img').src = "byui-logo_blue.webp";
}
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);