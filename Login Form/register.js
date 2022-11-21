function validateForm() {
  var name = document.forms["register-form"]["name"].value;
  var email = document.forms["register-form"]["email"].value;
  var pwd = document.forms["register-form"]["password"].value;
  var phone = document.forms["register-form"]["phone"].value;

  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regPhone = /^\d{10}$/;
  var regName = /\d+$/g;

  if (name == "" || regName.test(name)) {
    window.alert("Please enter your name correctly");
    name.focus();
    return false;
  }
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter your email correctly");
    email.focus();
    return false;
  }
  if (pwd == "") {
    alert("Please enter your password correctly");
    pwd.focus();
    return false;
  }
  if (pwd.length < 6) {
    alert("password should be atleast 6 character long");
    pwd.focus();
    return false;
  }
  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter your phone no correctly");
    phone.focus();
    return false;
  }

  alert("Registered Successfully");
  return true;
}
