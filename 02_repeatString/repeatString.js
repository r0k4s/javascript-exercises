const repeatString = function (text) {
  let word = "";
  let number = 10;
  if (number >= 0) {
    text = word.repeat(number);
  } else {
    text = "ERROR";
  }
  return text;
};

module.exports = repeatString;

/*
const repeatString = function (text) {
  let word = "goodbye";
  let number = -1;

  if (number >= 0) {
    text = word.repeat(number);
  } else {
    text = "ERROR";
  }
  return text;
};
*/
