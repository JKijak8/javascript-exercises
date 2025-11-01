const sumAll = function (start, end) {
  if (end < start) {
    let buffer = start;
    start = end;
    end = buffer;
  }

  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    Number.isNaN(start) ||
    Number.isNaN(end)
  ) {
    return "ERROR";
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
