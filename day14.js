const password = prompt("Password?");

// if (input == "ims") {
//   alert("Password Matched");
// } else {
//   alert("Password Not Matched");
// }

function passwordChecker(password) {
  if (password.length < 8) {
    alert("Password is too short. It should be at least 8 characters.");
  } else if (!/\d/.test(password)) {
    alert("Password should contain at least one number.");
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password should contain at least one special character.");
  } else {
    alert("Password is strong.");
  }
}

passwordChecker(password);

// // Example usage:
// const password1 = "abc";
// const password2 = "abc123456";
// const password3 = "abc123!";
// const password4 = "abc123!@#";

// alert(passwordChecker(password1)); // Password is too short. It should be at least 8 characters.
// alert(passwordChecker(password2)); // Password should contain at least one special character.
// alert(passwordChecker(password3)); // Password should contain at least one special character.
// alert(passwordChecker(password4)); // Password is strong.
