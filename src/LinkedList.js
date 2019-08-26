function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function(...values) {
  for (let value of values) {
    let newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode; // assuming there is no tail too
    }
  }
};

LinkedList.prototype.addToTail = function(...values) {
  for (let value of values) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }
};

LinkedList.prototype.removeFromHead = function() {
  if (this.head) {
    let r = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    r.next = null;
    return r.value;
  }
  return null;
};

LinkedList.prototype.removeFromTail = function() {
  if (this.tail) {
    let r = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    r.prev = null;
    return r.value;
  }
  return null;
};

LinkedList.prototype.display = function() {
  let result = "";
  let temp = this.head;
  while (temp) {
    result += `[${temp.value}] -> `;
    temp = temp.next;
  }
  return result.slice(0, result.lastIndexOf("]") + 1);
};

module.exports = LinkedList;

