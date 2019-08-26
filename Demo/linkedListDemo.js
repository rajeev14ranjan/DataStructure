const LinkedList = require('../src/LinkedList');

let list = new LinkedList();
list.addToHead(5);
list.addToTail(-45);
list.addToHead(15);
list.addToHead(25);
list.addToHead(88);
list.addToHead(56, 45, 67);
list.addToTail(999, 45, 66, 77);

console.log(list.display() + "\n\n");

list.removeFromHead();
list.removeFromHead();
list.removeFromTail();
list.removeFromTail();

console.log(list.display());