function passwordChecker(password) {
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasSpecialChar = /[^a-zA-Z0-9]/;
  const passwordLength = password.length >= 8;
  let errorMessage;
  switch (false) {
    case hasUppercase.test(password):
      errorMessage = "Please add at least an uppercase letter";
      break;
    case hasLowercase.test(password):
      errorMessage = "Please add at least an lowercase letter";
      break;
    case hasSpecialChar.test(password):
      errorMessage = "Please add at least one special character";
      break;
    case passwordLength:
      errorMessage = "your password should be 8 character or longer";
      break;

    default:
      errorMessage = "";
      break;
  }

  return errorMessage;
}
export default passwordChecker;
