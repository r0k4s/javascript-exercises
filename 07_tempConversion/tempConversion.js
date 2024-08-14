const convertToCelsius = function (toCelcius) {
  return Math.round((((toCelcius - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (toFahrenheit) {
  return Math.round(((toFahrenheit * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
