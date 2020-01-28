const BST = require('../src/Tree');
console.clear();

let tree = new BST(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(20);
tree.insert(80);
tree.insert(60);
tree.insert(100);
tree.insert(35);
tree.insert(55);


 console.log(`Depth of Tree = ${tree.depth()}`);
 tree.show();
let postOrder =[], preOrder =[], inOrder = [], ddf = [];
function addToIterator(stor, n){ stor.push(n)};

tree.DFS(addToIterator.bind(null,preOrder),'pre');
tree.DFS(addToIterator.bind(null,inOrder),'in');
tree.DFS(addToIterator.bind(null,postOrder),'post');
tree.BFS(addToIterator.bind(null,ddf));


console.log('PRE order traversal\n ' + preOrder.join(' -> '));
console.log('IN order traversal\n ' +inOrder.join(' -> '));
console.log('POST order traversal\n ' +postOrder.join(' -> '));
console.log('BFS\n ' +ddf.join(' -> '));
console.log();

tree.LevelOrder();
tree.ZigZagOrder();






