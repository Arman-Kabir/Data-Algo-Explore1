// 6
// 1-->10-->5-->16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// Constructor is the function that gets run at the very beginning when we create the linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// console.log(object);
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // code here ---7
        // const newNode={
        //     value:value,
        //     next:null
        // };
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        // code here---8
        // const newNode={
        //     value:value,
        //     next:null
        // };
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {

    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(11);
// myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());

console.log(myLinkedList);



