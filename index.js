console.log("Form Validation By using RegEx");

const username = document.getElementById('username');
const eAddress = document.getElementById('eAddress');
const number = document.getElementById('number');
let validEmail = false;
let validNumber = false;
let validUser = false;

// console.log(username, eAddress, number);

username.addEventListener('blur', () => {
    console.log("UserName is blurred");

    // Validate  Username here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; // "^" Start with, {2,10} it means number must have  a minimum of 3 
    let str = username.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your Name is valid');
        username.classList.remove('is-invalid')
        validUser = true;
    }
    else {
        console.log('Your Name is not valid');
        username.classList.add('is-invalid')

    }

});
eAddress.addEventListener('blur', () => {
    console.log("eAddress is blurred");

    // eAddress  Username here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; // "^" Start with, {2,10} it means number must have  a minimum of 3 
    let str = eAddress.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your eAddress is valid');
        eAddress.classList.remove('is-invalid')
        validEmail = true;
    }
    else {
        console.log('Your eAddress is not valid');
        eAddress.classList.add('is-invalid')

    };

});


number.addEventListener('blur', () => {
    console.log("Number is blurred");

    // Number  Username here
    let regex = /^(?:\+91)?[1-9]\d{9}$/; // "^" Start with, {2,10} it means number must have  a minimum of 3 
    let str = number.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your number is valid');
        number.classList.remove('is-invalid')
        validNumber = true;
    }
    else {
        console.log('Your number is not valid');
        number.classList.add('is-invalid')

    };

});


let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(validEmail, validNumber, validUser);
    console.log("You have submitted form");
    // Submit your form here
    if (validEmail && validNumber && validUser) {
        console.log('Phone user and email are valid. Form submitting');
        let success = document.getElementById('success');
        success.classList.add('show');
         let ele = document.getElementById("formid");
         ele.reset();
        success.style.display = "block";
        fail.classList.remove('show');


    }
    else {
        console.log('One  of three (Phone user and email) is not valid. Please check again!');
        let fail = document.getElementById('fail');
        fail.classList.add('show');
        fail.style.display = "block";
        success.classList.remove('show');

    }



})