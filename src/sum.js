module.exports = function sum(array) {
  return array.map((value, index, inArray) => inArray.reduce((a, b) => a + b) - value);
};
