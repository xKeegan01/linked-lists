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
}

let list = new DoublyLinkedLists();