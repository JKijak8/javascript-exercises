const fibonacci = function (num) {
  num = parseInt(num);
  let last = 0;
  let current = 1;

  if (num === 0) {
    return 0;
  } else if (num < 0) return "OOPS";

  for (let i = 1; i < num; i++) {
    let buffer = current;
    current += last;
    last = buffer;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
