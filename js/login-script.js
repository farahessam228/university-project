let submitBtn = document.getElementById("loginSubmit");

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let emailMsg = document.getElementById("emailMsg");
let passwordMsg = document.getElementById("passwordMsg");
let loginMsg = document.getElementById("loginMsg");

let emailRegex =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
let passwordRegex = /^[a-zA-Z0-9@]{8,}$/;

function checkEmail() {
  if (!emailRegex.test(emailInput.value)) {
    emailMsg.innerHTML = "Email is not valid";
    return false;
  } else {
    emailMsg.innerHTML = "";
    return true;
  }
}

function checkPassword() {
  if (!passwordRegex.test(passwordInput.value)) {
    passwordMsg.innerHTML = "Password minimum characters are 8";
    return false;
  } else {
    passwordMsg.innerHTML = "";
    return true;
  }
}

emailInput.addEventListener("input", checkEmail);

passwordInput.addEventListener("input", checkPassword);

function onSubmit() {
  if (checkEmail() & checkPassword()) {
    loginMsg.innerHTML = "";
    window.location.href = "../index.html";
  } else {
    loginMsg.innerHTML = "Please Complete The Required Inputs!";
  }
}
