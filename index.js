console.log("Form Validation By using RegEx");

const username = document.getElementById('username');
const eAddress = document.getElementById('eAddress');
const number = document.getElementById('number');

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
    }
    else {
        console.log('Your eAddress is not valid');
        eAddress.classList.add('is-invalid')

    };

});


number.addEventListener('blur', () => {
    console.log("Number is blurred");

    // Number  Username here
    let regex = /^[6-9][0-9]{9}$/; // "^" Start with, {2,10} it means number must have  a minimum of 3 
    let str = number.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your number is valid');
        number.classList.remove('is-invalid')
    }
    else {
        console.log('Your number is not valid');
        number.classList.add('is-invalid')

    };

});