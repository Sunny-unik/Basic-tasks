function validate(p) {
  var isvalid = true;
  var username = document.getElementById("username").value;
  var err1 = document.getElementById("error1");
  var err2 = document.getElementById("error2");
  var err3 = document.getElementById("error3");
  var err4 = document.getElementById("error4");
  var err5 = document.getElementById("error5");

  err1.style.display = "none";
  err2.style.display = "none";
  err3.style.display = "none";
  err4.style.display = "none";
  err5.style.display = "none";

  console.log(username);
  if (
    username.length <= 4 ||
    username == "" ||
    username == null ||
    username.length >= 12 ||
    username.includes(" ") == true
  ) {
    isvalid = false;
    err1.style.display = "block";
  }

  var fullname = document.getElementById("fullname").value;
  console.log(fullname);
  if (
    fullname == "" ||
    fullname == null ||
    fullname.length <= 2 ||
    fullname.length >= 28
  ) {
    isvalid = false;
    err2.style.display = "block";
  }
  var regFullName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regFullName.test(fullname)) {
    isvalid = false;
    err2.style.display = "block";
  }

  var mobileno = document.getElementById("mobileno").value;
  console.log(mobileno);
  if (mobileno.length != 10 || mobileno == "" || mobileno == null) {
    isvalid = false;
    err3.style.display = "block";
  }

  var email = document.getElementById("email").value;
  console.log(email);
  if (email.length == 0 || email == "" || email == null) {
    isvalid = false;
    err4.style.display = "block";
  }

  var about = document.getElementById("about").value;
  console.log(about);
  if (about.length <= 6 || about == "" || about == null || about >= 50) {
    isvalid = false;
    err5.style.display = "block";
  }

  return isvalid;
}
