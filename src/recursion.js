function  recursion (tree){
  const levels = [];
  let createArray = function(node, depth) {
    if (!node) return null;
    if (!levels[depth]) levels[depth] = [node.value];
    else levels[depth].push(node.value);
    createArray(node.left, depth + 1);
    createArray(node.right, depth + 1);
  };
  createArray(tree, 0);
  return levels;
}