const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const mailText = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', text => {
    text.preventDefault();
    let firstNameValue = firstName.value;
    if (firstNameValue == "") { 
        return form.classList.add('error-icon-firstname')
        
        
    } else {
        return form.classList.remove('error-icon-firstname')
    }
});

form.addEventListener('submit', text => {
    text.preventDefault();

    let mailTextValue = mailText.value;
    if (!validateEmail(mailTextValue)) {
       return form.classList.add('error-icon-e-mail');
    
    } else {
        return form.classList.remove('error-icon-e-mail')
    
    }
});

function validateEmail(email) {
    let correctEmail = /\w+@[a-z].[a-z]/;
    return correctEmail.test(email);
}

form.addEventListener('submit', text => {
    text.preventDefault();

    let lastNameValue = lastName.value;
    if (lastNameValue == "") {
        return form.classList.add('error-icon-lastname')
    } else {
        return form.classList.remove('error-icon-lastname')
    }
});

form.addEventListener('submit', text => {
    text.preventDefault();

    let passwordValue = password.value;
    if (passwordValue == "") {
        return form.classList.add('error-icon-password')
    } else {
        return form.classList.remove('error-icon-password')
    }
});