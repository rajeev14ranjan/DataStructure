function Graph(vertices) {
  this.noOfVertices = vertices;
  this.adjList = new Map();
}

Graph.prototype.addEdge = function (u, v, weight = 1) {
  [u, v].forEach((v) => {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
      this.noOfVertices = this.adjList.size;
    }
  });
  this.adjList.get(u).push({ v: v, w: weight });
}

Graph.prototype.Display = function () {
  let disp = [];
  this.adjList.forEach((value, key) => {
    for (let ver of value) {
      disp.push(`[${key}] --- ${ver.w} ---> [${ver.v}]`);
    }
  })
  console.log(disp.join("\n"));
}

Graph.prototype.BFS = function (startV) {
  let visited = new Set();
  let queue = [], BFSPath = [];

  queue.push(startV);
  visited.add(startV);

  while (queue.length > 0) {
    let vertex = queue.shift();
    BFSPath.push(vertex);


    let get_list = this.adjList.get(vertex);

    for (let vj of get_list) {
      if (!visited.has(vj.v)) {
        queue.push(vj.v);
        visited.add(vj.v);
      }
    }
  }

  console.log(`\nThe BFS traversal starting from ${startV} is :`)
  console.log(BFSPath.join(' -> ') + '\n');
}

Graph.prototype.DFS = function (startV) {
  let stack = [], DFSPath = [];
  let visited = new Set();

  stack.push(startV);

  while (stack.length) {
    let currentV = stack.pop();
    visited.add(currentV);
    DFSPath.push(currentV);

    for (let vertex of this.adjList.get(currentV)) {
      if (!visited.has(vertex.v)) {
        stack.push(vertex.v)
      }
    }

  }

  console.log(`\nThe DFS traversal starting from ${startV} is :`)
  console.log(DFSPath.join(' -> ') + '\n');

}

Graph.prototype.FindPathLength = function (startV, endV) {
  let distance = new Map();
  let visited = new Set();
  let queue = [], path = [];

  queue.push(startV);
  distance.set(startV, 0);
  path.push(startV);

  while (queue.length) {
    let currentV = queue.shift();
    visited.add(currentV);

    let adjList = this.adjList.get(currentV);

    for (let vertex of adjList) {
      let oldDistance = distance.get(vertex.v) || Infinity;
      let newDistance = distance.get(currentV) + vertex.w;

      distance.set(vertex.v, Math.min(oldDistance, newDistance));
      if (!visited.has(vertex.v)) queue.push(vertex.v);
    }
  }
  if (distance.has(endV))
    console.log(`The shortest distance between ${startV} and ${endV} is ${distance.get(endV)}`);
  else
    console.log(`A Path between ${startV} and ${endV} doesn't exist`);
}

Graph.prototype.getSimplifiedGraph = function () {
  let simplifiedGraph = new Graph();

  return simplifiedGraph;
}


module.exports = Graph;
