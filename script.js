const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("form");
const btn = document.querySelector("button");

const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");
const pwdError = document.querySelector(".pwdError");
const btnError = document.querySelector(".btnError");
const a = document.getElementsByClassName;

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

btn.addEventListener("click", function () {
  if (
    !validateFirstName() ||
    !validateLastName() ||
    !validateEmail() ||
    validatePassword() ||
  ) {
    btnError.style.display = "block";
    btnError.innerHTML = "Please check all fields";
    setTimeout(() => {
      btnError.style.display = "none";
    }, 5000);
    return false;
  }
});


function validateFirstName() {
  const name = document.querySelector(".firstName");
  if (name.value === "") {
    nameError.innerHTML = "First Name cannot be empty";
    return false;
  } else {
    nameError.innerHTML = '<i class="icon-error.svg"></i>';
    return true;
  }
}
function validateLastName() {
  const name = document.querySelector(".lastName");
  if (name.value === "") {
    nameError.innerHTML = "Last Name cannot be empty";
    return false;
  } else {
    nameError.innerHTML = '<i class="icon-error.svg"></i>';
    return true;
  }
}

function validateEmail() {
  const email = document.querySelector(".emailField");
  if (email.value === "") {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!email.value.includes("@" && ".")) {
    emailError.innerHTML = "Looks like this is not an email";
    return false;
  } else {
    emailError.innerHTML = '<i class="icon-error.svg"></i>';
    return true;
  }
}

const passwordField = document.querySelector(".password");
const cP = document.querySelector(".cPField");

function validatePassword() {
  if (passwordField.value === "") {
    passwordError.innerHTML = "Password cannot be empty";
    return false;
  } else {
    passwordError.innerHTML = '<i class="icon-error.svg"></i>';
    return true;
  }
}
