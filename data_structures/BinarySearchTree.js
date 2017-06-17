function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};
// DFT
BST.prototype.depthFirstTraversal = function(visit, order) {
  if (order === 'pre-order') visit(this);
  if (this.left) this.left.depthFirstTraversal(visit, order);
  if (order === 'in-order') visit(this);
  if (this.right) this.right.depthFirstTraversal(visit, order);
  if (order === 'post-order') visit(this);
};
// BFT
BST.prototype.breadthFirstTraversal = function(visit) {
  var queue = [this];
  while(queue.length) {
    var treeNode = queue.shift();
    visit(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};
// Min Val
BST.prototype.getMinVal = function() {
  if (!this.left) return this.value;
  return this.left.getMinVal();
};
// Max Val
BST.prototype.getMaxVal = function() {
  if (!this.right) return this.value;
  return this.right.getMaxVal();
};

function visit(node) {
  console.log(node.value);
}
var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.contains(105));
console.log(bst.depthFirstTraversal(visit, 'in-order'))
console.log(bst.breadthFirstTraversal(visit));
console.log('MIN ' + bst.getMinVal())
console.log('MAX ' + bst.getMaxVal())