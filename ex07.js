// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

const validateEmail = function (Email) {
  if (!Email.includes("@")) {
    return false;
  }

  const userName = Email.split("@")[0];
  const domain = Email.split("@")[1];

  if (!userName) {
    return false;
  }

  if (!domain.includes(".")) {
    return false;
  }

  const domainBeforeDot = domain.split(".")[0];
  const domainAfterDot = domain.split(".")[1];

  if (domainBeforeDot && domainAfterDot) {
    return true;
  } else {
    return false;
  }
};

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false
