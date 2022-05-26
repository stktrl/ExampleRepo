
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
        //    event.preventDefault()
          form.classList.add('was-validated')
        }, false)
      })
  })()


// function ValidateEmail() {

//     let input = document.getElementById("email");

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
//     if (input.value.match(validRegex)) {
  
//       console.log("Valid email address!");
  

  
//       return true;
  
//     } else {
  
//       console.log("Invalid email address!");

  
//       return false;
  
//     }
  
//   }