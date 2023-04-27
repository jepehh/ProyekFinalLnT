var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var selectError = document.getElementById('select-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required!';
        return false;
    } 
    if(name.length < 3){
        nameError.innerHTML = 'Name must be more than 3 character!';
        return false;
    }
    nameError.innerHTML = '<i class ="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    const format = /^08\d{0,12}$/;

    const isValid = format.test(phone);

    if(isValid){
        if(phone.length == 0){
            phoneError.innerHTML = 'Phone number must be valid!';
            return false;
        } 
        if(phone.length > 12 || phone.length <= 11){
            phoneError.innerHTML = 'Phone number must be valid!';
            return false;
        }
        phoneError.innerHTML = '<i class ="fas fa-check-circle"></i>';
        return true;
    } else {
        phoneError.innerHTML = 'Phone number must begin with "08"!';
        return false;
    }
    
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    const format = /@/;

    const isValid = format.test(email);

    if(isValid){
        emailError.innerHTML = '<i class ="fas fa-check-circle"></i>';
        return true;
    } else {
        emailError.innerHTML = 'Email is not valid!';
        return false;
    }
}

function getSelectValue(){
    var option = document.getElementById('list').value;

    if(option){
        selectError.innerHTML = '<i class ="fas fa-check-circle"></i>';
        return true;
    } else {
        selectError.innerHTML = 'Please select an event!';
        return false;
    }
}

function validateForm(){
    if(!validateEmail() || !validatePhone() || !validateName() || !getSelectValue()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to submit!';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}