//jshint esversion: 6

class Node {
    constructor(val) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

//add element at end of list
    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

//remove element from end of list
    pop() {
        let removedTail = this.tail;
        if (!this.length) {
            return null;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            removedTail.prev = null;
        }
        this.length--;
        return removedTail;
    }

//remove element from beginning of list
    shift() {
        let currentHead = this.head;
        if (!this.length) {
            return null;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            this.tail.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }

//add element at beginning of list
    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

//get specific element in the list based on given index
    get(index) {
        let middle = this.length / 2;
        let currentHead = this.head;
        let currentTail = this.tail;
        let headCount = 0;
        let tailCount = this.length - 1;
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index < middle) {
            while (headCount < index) {
                currentHead = currentHead.next;
                headCount++;
            }
            return currentHead;
        } else if (index > middle) {
            while (tailCount > index) {
                currentTail = currentTail.prev;
                tailCount--;
            }
            return currentTail;
        }
    }

//set new value at specific index in list
    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return null;
        } else {
            foundNode.val = val;
            return foundNode;
        }
    }

//add element at specific index in list
    insert (index, val) {
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            return !!this.push(val);
        } else if (index === 0) {
            return !!this.unshift(val);
        } else {
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.length++;
        }
        return true;
    }

//remove element at specific index in list  
    remove(index) {
        let removedNode = this.get(index);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            removedNode.prev = null;
            removedNode.next = null;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.length--;
        }
        return removedNode;
    }
}

let list = new DoublyLinkedLists();