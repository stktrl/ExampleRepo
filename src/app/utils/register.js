 (function () {
    'use strict'

    var emailInput = document.getElementById("email");
    var passWordInput = document.getElementById("firstPassword");
    var rmCheck = document.getElementById("rememberMe");
    function isRememberMe() {
        if (rmCheck.checked && emailInput.value !== "") {
          localStorage.username = emailInput.value;
          console.log(emailInput.value);
          localStorage.password = passWordInput.value;
          localStorage.checkbox = rmCheck.value;
        } else {
          localStorage.username = "";
          localStorage.checkbox = "";
        }
      }
      
    var forms = document.querySelectorAll('.needs-validation')
    let firstPassword = document.getElementById("firstPassword");
    let secondPassword = document.getElementById("secondPassword");
    var passValid = false;
    var isEq =true;

    var isPassStrong = function(value){
        const isWhitespace = /^(?=.*\s)/;
        if (isWhitespace.test(value)) {
            firstPassword.setCustomValidity('not equal');
            secondPassword.setCustomValidity('not equal');
            document.getElementById("passwordValidation").textContent = "Password must not contain Whitespaces.";
            return false;
        } 

        const isContainsUppercase = /^(?=.*[A-Z])/;
        if (!isContainsUppercase.test(value)) {
            firstPassword.setCustomValidity('not equal');
            secondPassword.setCustomValidity('not equal');
            document.getElementById("passwordValidation").textContent = "Password must have at least one Uppercase Character.";
            return false;
        } 

        const isContainsLowercase = /^(?=.*[a-z])/;
        if (!isContainsLowercase.test(value)) {
            firstPassword.setCustomValidity('not equal');
            secondPassword.setCustomValidity('not equal');
            document.getElementById("passwordValidation").textContent = "Password must have at least one Lowercase Character.";
            return false;
        } 


        const isContainsNumber = /^(?=.*[0-9])/;
        if (!isContainsNumber.test(value)) {
            firstPassword.setCustomValidity('not equal');
            secondPassword.setCustomValidity('not equal');
            document.getElementById("passwordValidation").textContent = "Password must contain at least one Digit.";
            return false;
        } 


        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        if (!isContainsSymbol.test(value)) {
            firstPassword.setCustomValidity('not equal');
            secondPassword.setCustomValidity('not equal');
            document.getElementById("passwordValidation").textContent = "Password must contain at least one Special Symbol.";
            return false;
        } 
        return true;
    }

    firstPassword.addEventListener('input', function (event) {
       if(isPassStrong(firstPassword.value))
       {    
        firstPassword.setCustomValidity('');
        passValid = true;
       }

        
    

    })

    secondPassword.addEventListener('input', function (event) {

        if (!(firstPassword.value === secondPassword.value && firstPassword.value.length != 0 && secondPassword.value.length != 0)) {
            secondPassword.setCustomValidity('not equal');
            document.getElementById("passwordEqual").textContent = "Passwords are not equal."
            isEq = false;
        } else {
            isEq = true
        }
        if(passValid&& isEq){
            
            secondPassword.setCustomValidity('');
        }
        
    })


    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {

                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }else{
                    isRememberMe();

                }
                    
                
                
                form.classList.add('was-validated')
            }, false)
        })
})()

