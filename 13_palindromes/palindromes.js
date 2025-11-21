/**
 *
 * @param {String} string
 */
const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

const palindromes = function (string) {
  let cleaned = string
    .toLowerCase()
    .split("")
    .filter((char) => alphanumerical.includes(char))
    .join("");

  let reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
