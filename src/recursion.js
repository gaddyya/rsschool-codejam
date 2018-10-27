function  recursion (tree){
  const levels = [];
  const createArray = function(node, depth) {
    if (!node) return null;
    if (!levels[depth]) return levels[depth] = [node.value];
    else return levels[depth].push(node.value);
    createArray(node.left, depth + 1);
    createArray(node.right, depth + 1);
  };
  createArray(tree, 0);
  return levels;
}
