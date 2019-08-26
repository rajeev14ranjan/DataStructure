module.exports = BST;

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (newValue) {
  if (newValue <= this.value) {
    this.left ? this.left.insert(newValue) : this.left = new BST(newValue);
  } else {
    this.right ? this.right.insert(newValue) : this.right = new BST(newValue);
  }
}

BST.prototype.DFS = function (iterator, order) {
  if (order == 'pre') iterator(this.value);
  if (this.left) this.left.DFS(iterator, order);
  if (order == 'in') iterator(this.value);
  if (this.right) this.right.DFS(iterator, order);
  if (order == 'post') iterator(this.value);
}

BST.prototype.BFS = function (iterator) {
  let root = this;
  let que = [];
  que.push(root);

  while (que.length) {
    let currentNode = que.shift();
    //console.log(currentNode.value);
    iterator(currentNode.value);

    if (currentNode.left) que.push(currentNode.left);
    if (currentNode.right) que.push(currentNode.right);
  }
}

BST.prototype.LevelOrder = function(){
  let level = [], queue = [];
  queue.push(this);
  let n = queue.length;

  while(queue.length){
    let currentNode = queue.shift();
    level.push(currentNode.value);

    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }

  console.log(`Level Order traversal :\n ${level.join(' -> ')}`);

}

BST.prototype.ZigZagOrder = function(){
  let level = [], stack1 = [], stack2 =[]
  stack1.push(this);

  while(stack1.length || stack2.length){
    while(stack1.length){
        let currentNode = stack1.pop();
        level.push(currentNode.value);

        if(currentNode.left) stack2.push(currentNode.left);
        if(currentNode.right) stack2.push(currentNode.right);
    }
    while(stack2.length){
        let currentNode = stack2.pop();
        level.push(currentNode.value);

        if(currentNode.right) stack1.push(currentNode.right);
        if(currentNode.left) stack1.push(currentNode.left);
    } 
  }

  console.log(`ZigZagOrder traversal :\n ${level.join(' -> ')}`);

}

BST.prototype.depth = function () {
  let leftDepth = this.left ? this.left.depth() : 0;
  let rightDepth = this.right ? this.right.depth() : 0;

  return 1 + Math.max(leftDepth, rightDepth);
}

