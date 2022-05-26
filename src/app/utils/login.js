var email = document.getElementById("email")
var password = document.getElementById("firstPassword");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    email.value = localStorage.username;
    password.value = localStorage.password;
  } else {
    email.value = "";
    password.value="";
  }