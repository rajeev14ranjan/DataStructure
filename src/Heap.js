function Heap(type = 'min') {
  this.isMinHeap = type === 'min';
  this.heap = new Array();
}

const swap = function(heap, i, j) {
  const temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
};

Heap.prototype.clear = function() {
  this.heap.length = 0;
};

Heap.prototype.get = function(index) {
  return this.heap[index];
};

Heap.prototype.display = function() {
  return this.heap.join(' -> ');
};

Heap.prototype.getChildrenIndex = index => {
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left >= this.heap.length) left = null;
  if (right >= this.heap.length) right = null;

  return [left, right];
};

Heap.prototype.insert = function(val) {
  const size = this.heap.push(val);
  this.isMinHeap ? this.minHeapify(size - 1) : this.maxHeapify(size - 1);
};

Heap.prototype.minHeapify = function(index) {
  while (index && this.get(this.getParentIndex(index)) > this.get(index)) {
    swap(this.heap, index, this.getParentIndex(index));
    index = this.getParentIndex(index);
  }
};

Heap.prototype.maxHeapify = function(index) {
  while (index && this.get(this.getParentIndex(index)) < this.get(index)) {
    swap(this.heap, index, this.getParentIndex(index));
    index = this.getParentIndex(index);
  }
};

Heap.prototype.getChildren = function(index) {
  const [left, right] = this.getChildrenIndex(index);
  return [left && this.heap[left], right && this.heap[right]];
};

Heap.prototype.getParentIndex = function(index) {
  return ((index - 1) / 2) >> 0;
};

Heap.prototype.getParent = function(index) {
  const parentIndex = this.getParentIndex(index);
  if (parentIndex > -1 && parentIndex < this.heap.length) {
    return this.heap[parentIndex];
  }
  return null;
};

Heap.prototype.extractRoot = function() {
  let rootVal = this.heap[0];
  this.heap[0] = this.heap.pop();

  let [left, right] = this.getChildrenIndex(0);
  while (left && this.get()) {}
  return rootVal;
};

module.exports = Heap;
