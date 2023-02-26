var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var RegisterError = document.getElementById('Register-error');
var LoginError = document.getElementById('Login-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
    
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}