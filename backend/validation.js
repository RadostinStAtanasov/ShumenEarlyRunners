function isValidEmail(value) {
  return value && value.includes("@");
}

function isValidText(value, minLength = 1) {
  return value && value.trim().length >= minLength;
}

exports.isValidEmail = isValidEmail;
exports.isValidText = isValidText;
