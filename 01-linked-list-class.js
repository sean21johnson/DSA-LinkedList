class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(item, key) {
        if (!this.head) {
            return;
        }

        if (this.head.value === key) {
            this.insertFirst(item);
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== key) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('key value not found');
            return
        }

        previousNode.next = new _Node(item, currNode)
    }

    insertLast(item) {
        if (this.head === null) {
          this.insertFirst(item);
        } else {
          let tempNode = this.head;
          while (tempNode.next !== null) {
            tempNode = tempNode.next;
          }
          tempNode.next = new _Node(item, null);
        }
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
}

module.exports = LinkedList;