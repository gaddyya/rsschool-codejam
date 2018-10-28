module.exports = function make(...argument) {
  const tempArray = [];
  for (let i = 0; i < argument.length; i += 1) tempArray.push(argument[i]);
  function inner(...args) {
    if (typeof args[0] === 'function') return tempArray.reduce(args[0]);
    for (let i = 0; i < args.length; i += 1) tempArray.push(args[i]);
    return inner;
  }
  return inner;
};
