month = document.querySelector("#expirationMonth").value
year = document.querySelector("#expirationYear").value
function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg;
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	month = this.querySelector("#expirationMonth").value
    year = this.querySelector("#expirationYear").value
    console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += '<p>Card number is not a valid number</p>'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += '<p>Card number is not a valid card number</p>'
	}
    if (isNaN(month)|| isNaN(year)){
        errorMsg += '<p>Not a valid date</p>'
    }else if(!checkDate(month, year)){
        errorMsg += '<p>This card is expired!</p>'
    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}
function checkDate(month, year){
    //I had AI help me with this, I had it explain why everything works the way it does
    
    const cardMonth = parseInt(month) -1;
    const cardYear = year;
    const now = new Date();
    const inputDate = new Date(20+cardYear, cardMonth, 1);

    return inputDate > now;
}
document.querySelector('#creditCardForm').addEventListener('submit', submitHandler);