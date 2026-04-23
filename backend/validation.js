const { compare } = require("bcryptjs");

function isValidEmail(value) {
  return value && value.includes("@");
}

function isValidText(value, minLength = 1) {
  return value && value.trim().length >= minLength;
}

function isValidPassword(password, storedPassword) {
  return compare(password, storedPassword);
}

exports.isValidEmail = isValidEmail;
exports.isValidText = isValidText;
exports.isValidPassword = isValidPassword;
