module.exports = BST;

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.show = function(){
  const space = (n,r=' ') => (new Array(n+1)).join(r);
  const depth = this.depth();
  const showNode = (level,val) => `${space(2*(depth-level))}${val}`;
  const links = (level,no) =>{
    if(level >= depth) return '';
    return (new Array(level+2)).join(`${space(2*(depth-level)-1)}/  \\`);
  } 
  let treeString = [], queue1 = [], queue2 =[];
  let cLevel = 0, cNode;
  queue1.push(this);

  while(queue1.length || queue2.length){
    while(queue1.length){
        cNode = queue1.shift();
        treeString.push(showNode(cLevel, cNode ? cNode.value: ''));
        if(cNode){
          queue2.push(cNode.left);
          queue2.push(cNode.right);
        }
    }
    treeString.push(`\n${links(cLevel, queue2.length)}\n`);
    cLevel++;
    while(queue2.length){
        cNode = queue2.shift();
        treeString.push(showNode(cLevel, cNode ? cNode.value: ''));
        if(cNode){
          queue1.push(cNode.left);
          queue1.push(cNode.right);
        }
    }
    treeString.push(`\n${links(cLevel, queue1.length)}\n`);
    cLevel++;
  }
  console.log(`\n${treeString.join('')}`);
}

BST.prototype.insert = function (newValue) {
  if (newValue <= this.value) {
    this.left ? this.left.insert(newValue) : this.left = new BST(newValue);
  } else {
    this.right ? this.right.insert(newValue) : this.right = new BST(newValue);
  }
}

BST.prototype.DFS = function (callback, order) {
  if (order == 'pre') callback(this.value);
  if (this.left) this.left.DFS(callback, order);
  if (order == 'in') callback(this.value);
  if (this.right) this.right.DFS(callback, order);
  if (order == 'post') callback(this.value);
}

BST.prototype.BFS = function (callback) {
  let root = this;
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let currentNode = queue.shift();
    callback(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
}

BST.prototype.LevelOrder = function(){
  let levelOrder = [];
  const levelOrderCallback = value => levelOrder.push(value);
  this.BFS(levelOrderCallback);
  console.log(`Level Order traversal :\n ${levelOrder.join(' -> ')}`);
}

BST.prototype.ZigZagOrder = function(){
  let zigZagOrder = [], stack1 = [], stack2 =[];
  let currentNode;
  stack1.push(this);

  while(stack1.length || stack2.length){
    while(stack1.length){
        currentNode = stack1.pop();
        zigZagOrder.push(currentNode.value);

        if(currentNode.left) stack2.push(currentNode.left);
        if(currentNode.right) stack2.push(currentNode.right);
    }
    while(stack2.length){
        currentNode = stack2.pop();
        zigZagOrder.push(currentNode.value);

        if(currentNode.right) stack1.push(currentNode.right);
        if(currentNode.left) stack1.push(currentNode.left);
    } 
  }

  console.log(`ZigZagOrder traversal :\n ${zigZagOrder.join(' -> ')}`);

}

BST.prototype.depth = function () {
  if(!this) return 0;
  let leftDepth = this.left ? this.left.depth() : 0;
  let rightDepth = this.right ? this.right.depth() : 0;

  return 1 + Math.max(leftDepth, rightDepth);
}

//         50
//       /    \
//     30     70
//   /   \    /  \
//  2    40  60   80