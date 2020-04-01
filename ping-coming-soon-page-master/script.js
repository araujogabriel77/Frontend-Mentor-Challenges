const form = document.getElementById('form');
const small = document.getElementById('error-msg');
const inputEmail = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    let email = form['email'].value;


    if (email === '') {
        errorMessage(small, 'Whoops! It looks like you forgot to add your email');
    } else if (validateEmail(email) !== true) {
        errorMessage(small, 'Please provide a valid email address');
    }
    else {
        removeErrorMessage(small, email);
    }

});
function errorMessage(small, message) {
    inputEmail.classList.add('error');
    small.innerHTML = message;
    small.style.opacity = '1';
}
function removeErrorMessage(small, email) {
    inputEmail.classList.remove('error');
    small.style.opacity = '0';
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}