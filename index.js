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
  const rankings = document.querySelectorAll('ranked-list');
 
  let children = [];
 
  for (let i=0, h = rankings.length; i < h; i++) {
    children.push(rankings[i].children);
 
  for (let j=0, k = children.length; j < k; j++) {
    children[j].innerHTML = (parseInt(children[j].innerHTML) + n);
  }}
 
 
}
