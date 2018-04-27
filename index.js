function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let childNode = node.children[0];
  
  while (childNode) {
    node = childNode;
    childNode = node.children[0];
  }
  
  return node;
}

function increaseRankBy(n) {
 