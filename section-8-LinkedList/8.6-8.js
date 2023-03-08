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
class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        // code here ---7
        const newNode={
            value:value,
            next:null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        // code here---8
        const newNode={
            value:value,
            next:null
        };

    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);

myLinkedList.append(5);
myLinkedList.append(16);

console.log(myLinkedList);



