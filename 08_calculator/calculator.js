const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers != false
    ? numbers.reduce((total, number) => total + number)
    : 0;
};

const multiply = function (numbers) {
  return numbers.reduce((total, number) => total * number);
};

const power = function (number, power) {
  const iterations = power - 1;
  let total = number;
  for (let i = 0; i < iterations; i++) {
    total *= number;
  }
  return total;
};

const factorial = function (number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
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
