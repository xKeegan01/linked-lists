//jshint esversion: 6

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

//push element to the end of list
    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

//remove element from the end of list    
    pop() {
        if (!this.length) {
            return null;
        } else {
            let currentNode = this.head;
            let secondToLastNode = this.head;
            while(currentNode.next) {
                secondToLastNode = currentNode;
                currentNode = currentNode.next;
            }
            secondToLastNode.next = null;
            this.tail = secondToLastNode;
            this.length--;
            if (!this.length) {
                this.head = null;
                this.tail = null;
            }
            return this;
        }
    }

//remove element from the beginning of list
    shift() {
        let currentNode = this.head;
        if (!this.length) {
            return null;
        } else {
            this.head = currentNode.next;
            this.length--;
        }
        return this;
    }

//add element at the beginning of list    
    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

//get element at specific index in the list
    get(index) {
        let currentNode = this.head;
        let counter = 0;
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
        }
    }

//set new value at specific index in the list    
    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return null;
        } else {
            foundNode.val = val;
            return foundNode;
        }
    }

//insert a new value at specific index in the list
    insert(index, val) {
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            return !!this.push(val);
        } else if (index === 0) {
            return !!this.unshift(val);
        } else {
            let temp = prevNode.next;
            prevNode.next = newNode;
            newNode.next = temp;
            this.length++;
        }
        return true;
    }

//remove element at specific index in the list
    remove(index) {
        let prevNode = this.get(index - 1);
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let removedNode = prevNode.next;
            prevNode.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

//reverse list of elements
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

//print array of list
    prrint() {
        let arr = [];
        let currentNode = this.head;
        while(currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
