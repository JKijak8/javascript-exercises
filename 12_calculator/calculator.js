const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

/**
 *
 * @param {Array} array
 */
const sum = function (array) {
  return array.reduce((accumulator, num) => (accumulator += num), 0);
};

/**
 *
 * @param {Array} array
 */
const multiply = function (array) {
  return array.reduce((accumulator, num) => (accumulator *= num));
};

const power = function (base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let power = base;

  for (let i = 1; i < exponent; i++) {
    power *= base;
  }
  return power;
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
