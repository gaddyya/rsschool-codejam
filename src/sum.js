module.export = function sumOfOther(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  return array.map(value => sum - value);
}