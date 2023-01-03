const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (a) {
  let result = 0
  for (let number of a) {
    b = parseInt(number)
    result = result + b
  }
  return result
};

const multiply = function (a) {
  let result = 1
  for (let number of a) {
    b = parseInt(number)
    result = result * b
  }
  return result
};

const power = function (a, b) {
  let result = 1
  for (b = b; b > 0; b--) {
    result = result * a
  }
  return result
};

const factorial = function (a) {
  let result = 1
  let count = a
  while (count > 0) {
    result = result * count
    count--
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
