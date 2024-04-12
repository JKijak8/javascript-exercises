const convertToCelsius = function(temperature) {
    temperature = (temperature - 32) * (5/9)
    rounded = Math.round(temperature * 10) / 10;
    return rounded;
};

const convertToFahrenheit = function(temperature) {
    temperature = temperature * (9/5) + 32;
    rounded = Math.round(temperature * 10) / 10;
    return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
