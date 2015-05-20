(function() {
var newHeader = document.getElementsByTagName('h1')[0];
var newTitle = document.getElementsByTagName('title')[0];
var test = document.getElementsByTagName('p')[0];
var newForm = document.createElement('form');
var newDiv = document.createElement('div');
var divOptions = document.createElement('label');
var divList = document.createElement('select');
var submitButton = document.createElement('input');
//var submitButton = document.getElementsByTagName('input');

// newHeader.innerHTML = "Blaaaaaaarg!!!";
// test.innerHTML = "My first post is pure bullshit";

var makeDiv = function(newLabel, newInput, inputName) {
	var newDiv = document.createElement('div');

	var labelElement = document.createElement('label');
	labelElement.setAttribute('for', newLabel);

	var inputElement = document.createElement('input');
	inputElement.setAttribute('type', newInput);
	inputElement.setAttribute('name', inputName);

	labelElement.innerHTML = newLabel;
	inputElement.innerHTML = newInput;

	newDiv.appendChild(labelElement);
	newDiv.appendChild(inputElement);
	newForm.appendChild(newDiv);

	return makeDiv;
};

makeDiv('Email: ', 'text', 'email');
makeDiv('Credit Card Number: ', 'text', 'cc');
makeDiv('Card Expiration Date: ', 'text', 'expiration');
makeDiv('Name on Card: ', 'text', 'cardName');
makeDiv('CVC Code: ', 'text', 'cvc');
makeDiv('City: ', 'text', 'city');

newHeader.innerHTML = "Gimme your personal info so I can rob you"

document.body.appendChild(newForm);

var submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('id', 'button');
submitButton.setAttribute('value', 'Press Me!')

newForm.appendChild(submitButton);

//need to figure out how to get the submit button to send info
//submitButton.onClick
})();
