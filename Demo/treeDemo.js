const BST = require('../src/Tree');

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


// console.log(tree);

// console.log('-----------');

 console.log(`Depth of Tree = ${tree.depth()}`);

let posta =[], prea =[], ina = [], ddf = [];
function addToIterator(stor, n){ stor.push(n)};

tree.DFS(addToIterator.bind(null,prea),'pre');
tree.DFS(addToIterator.bind(null,ina),'in');
tree.DFS(addToIterator.bind(null,posta),'post');
tree.BFS(addToIterator.bind(null,ddf));


console.log('PRE order traversal\n ' + prea.join(' -> '));
console.log('IN order traversal\n ' +ina.join(' -> '));
console.log('POST order traversal\n ' +posta.join(' -> '));
console.log('BFS\n ' +ddf.join(' -> '));
tree.LevelOrder();
tree.ZigZagOrder();





