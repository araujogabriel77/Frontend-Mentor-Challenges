const form = document.querySelector('#form');
const errorTxt = document.getElementsByClassName('error-txt');
const inputForm = document.getElementsByClassName('input-form');
const errorIco = document.getElementsByClassName('error-ico');


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        errorMessage(0, 'First Name cannot be empty');
    } else {
        removeErrorMessage(0);
    }

    if (lastName === '') {
        errorMessage(1, 'Last Name cannot be empty');
    } else {
        removeErrorMessage(1);
    }

    if (email === '') {
        errorMessage(2, 'Email cannot be empty');
    } else if (validateEmail(email) !== true) {
        errorMessage(2, 'Look like this is not an email');
    }
    else {
        removeErrorMessage(2);
    }
    if (password === '') {
        errorMessage(3, 'Password cannot be empty');
    } else {
        removeErrorMessage(3);
    }

});

function errorMessage(position, message) {
    errorIco[position].style.display = 'block';
    inputForm[position].classList.add('error-input');
    errorTxt[position].innerHTML = message;
    errorTxt[position].style.opacity = '1';
}
function removeErrorMessage(position) {
    errorIco[position].style.display = 'none';
    inputForm[position].classList.remove('error-input');
    errorTxt[position].style.opacity = '0';
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}