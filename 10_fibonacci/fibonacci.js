const fibonacci = function (number) {
  number = Number(number);

  if (number < 0) {
    return "OOPS";
  }

  let fibonacci = [0, 1];

  while (fibonacci[number] === undefined) {
    let length = fibonacci.length - 1;
    fibonacci.push(fibonacci[length] + fibonacci[length - 1]);
  }
  return fibonacci[number];
};

// Do not edit below this line
module.exports = fibonacci;
