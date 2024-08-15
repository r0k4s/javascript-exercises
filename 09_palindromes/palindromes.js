const palindromes = function (string) {
  const cleanString = string
    .replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase();
  console.log(cleanString);
  return cleanString === cleanString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
