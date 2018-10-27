function make() {
  const tempArray = [];
  for (let i = 0; i < arguments.length; i += 1) tempArray.push(arguments[i]);
  function inner() {
    if (typeof arguments[0] === 'function') return tempArray.reduce(arguments[0]);
    for (let i = 0; i < arguments.length; i += 1) tempArray.push(arguments[i]);
    return inner;
  }
  return inner;
}
