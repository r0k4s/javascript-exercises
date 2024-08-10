const repeatString = function (word, number) {
  if (number >= 0) {
    text = word.repeat(number);
  } else {
    text = "ERROR";
  }
  return text;
};

module.exports = repeatString;
