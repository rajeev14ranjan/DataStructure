const Heap = require('../src/Heap');

const minHeap = new Heap('min');

minHeap.insert(40);
minHeap.insert(50);
minHeap.insert(10);
minHeap.insert(65);
minHeap.insert(9);
minHeap.insert(97);
minHeap.insert(55);
minHeap.insert(1);
minHeap.insert(88);

console.log(minHeap.display());
