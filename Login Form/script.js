const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userid = loginForm.email.value;
  const password = loginForm.password.value;

  if (userid == "user@gmail.com" && password == "login") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    alert("Invalid username and password");
    location.reload();
  }
});
