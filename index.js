console.log("Form Validation By using RegEx");

const username = document.getElementById('username');
const eAddress = document.getElementById('eAddress');
const number = document.getElementById('number');

// console.log(username, eAddress, number);

username.addEventListener('blur',  () => { 
    console.log("UserName is blurred"); 

    // Validate  Username here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/; // "^" Start with, {2,10} it means number must have  a minimum of 3 
    let str = username.value;
    console.log(regex,str) ;

    if (regex.test(str)) {
        console.log('It matched');
        username.classList.remove('is-invalid')
    }
    else{
        console.log('No Match');
        username.classList.add('is-invalid')

    }

 } );
 eAddress.addEventListener('blur',  () => { 
    console.log("eAddress is blurred"); 

    // eAddress  Username here

 } );
 number.addEventListener('blur',  () => { 
    console.log("Number is blurred"); 

    // Number  Username here

 } );