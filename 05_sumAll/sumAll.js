const sumAll = function (a, b) {
  let sum = 0;
  if (a < 0 || b < 0 || !Number.isInteger(b) || !Number.isInteger(a)) {
    return "ERROR";
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
