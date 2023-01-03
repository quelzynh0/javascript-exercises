const convertToCelsius = function (temp) {
  c = (temp - 32) / 1.8
  c = Math.round(c * 10) / 10
  return c
};

const convertToFahrenheit = function (temp) {
  f = temp * 1.8 + 32
  f = Math.round(f * 10) / 10
  return f
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
