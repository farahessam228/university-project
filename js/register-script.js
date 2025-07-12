let submitBtn = document.getElementById("RegisterSubmit");

let firstnameInput = document.getElementById("firstname");
let secondnameInput = document.getElementById("lastname");
let emailInput = document.getElementById("email");
let numberInput = document.getElementById("number");
let passwordInput = document.getElementById("password");
let confirmpassInput = document.getElementById("confirmpass");

let firstnameMsg = document.getElementById("firstnameMsg");
let secondnameMsg = document.getElementById("secondnameMsg");
let emailMsg = document.getElementById("emailMsg");
let numberMsg = document.getElementById("numberMsg");
let passwordMsg = document.getElementById("passwordMsg");
let confirmpassMsg = document.getElementById("confirmpassMsg");
let RegisterMsg = document.getElementById("RegisterMsg");

let firstnameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
let secondnameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
let emailRegex =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
let numberRegex = /^(0|[1-9][0-9]*){11}$/;
let passwordRegex = /^[a-zA-Z0-9@]{8,}$/;
let confirmpassRegex = passwordRegex;

function checkFirstName() {
  if (!firstnameRegex.test(firstnameInput.value)) {
    firstnameMsg.innerHTML = "Name is not valid";
    return false;
  } else {
    firstnameMsg.innerHTML = "";
    return true;
  }
}

function checkSecondName() {
  if (!secondnameRegex.test(secondnameInput.value)) {
    secondnameMsg.innerHTML = "Name is not valid";
    return false;
  } else {
    secondnameMsg.innerHTML = "";
    return true;
  }
}

function checkEmail() {
  if (!emailRegex.test(emailInput.value)) {
    emailMsg.innerHTML = "Email is not valid";
    return false;
  } else {
    emailMsg.innerHTML = "";
    return true;
  }
}

function checkNumber() {
  if (!numberRegex.test(numberInput.value)) {
    numberMsg.innerHTML = "Number is not valid";
    return false;
  } else {
    numberMsg.innerHTML = "";
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

function checkconfirmPass() {
  if (confirmpassInput.value !== passwordInput.value) {
    confirmpassMsg.innerHTML = "Password doesn't match correctly";
    return false;
  } else {
    confirmpassMsg.innerHTML = "";
    return true;
  }
}

firstnameInput.addEventListener("input", checkFirstName);

secondnameInput.addEventListener("input", checkSecondName);

emailInput.addEventListener("input", checkEmail);

numberInput.addEventListener("input", checkNumber);

passwordInput.addEventListener("input", checkPassword);

confirmpassInput.addEventListener("input", checkconfirmPass);

function onSubmit() {
  if (
    checkFirstName() &
    checkSecondName() &
    checkEmail() &
    checkNumber() &
    checkPassword() &
    checkconfirmPass()
  ) {
    RegisterMsg.innerHTML = "";
    window.location.href = "../index.html";
  } else {
    RegisterMsg.innerHTML = "Please Complete The Required Inputs!";
  }
}
