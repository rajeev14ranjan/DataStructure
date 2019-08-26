const Graph = require("../src/Graph");

var g = new Graph(6);

// adding edges 
g.addEdge('A', 'B', 10);
g.addEdge('B', 'A', 20);
g.addEdge('A', 'D', 5);
g.addEdge('A', 'E', 10);
g.addEdge('B', 'C', 5);
g.addEdge('D', 'E', 4);
g.addEdge('E', 'F', 10);
g.addEdge('C', 'F', 4);

//console.log(g);

g.BFS('A');

g.FindPathLength('A', 'F');
g.FindPathLength('A', 'E');
g.FindPathLength('D', 'F');
g.FindPathLength('C', 'D');
g.FindPathLength('B', 'D');
g.FindPathLength('B', 'F');
g.FindPathLength('B', 'E');

g.DFS('A');

g.Display();

