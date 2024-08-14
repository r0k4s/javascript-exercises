const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (obj) {
  let sum = obj.reduce((acc, currVal) => acc + currVal, 0);
  return sum;
};

const multiply = function (obj) {
  let multiply = obj.reduce((acc, currVal) => acc * currVal, 1);
  return multiply;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (obj) {
  let factorial = 1;
  for (let i = 2; i <= obj; i++) factorial = factorial * i;
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
