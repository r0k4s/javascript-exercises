const removeFromArray = function (givenArray, ...parameters) {
  const newArray = [];

  for (let i = 0; i < givenArray.length; i++) {
    if (!parameters.includes(givenArray[i])) {
      newArray.push(givenArray[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
