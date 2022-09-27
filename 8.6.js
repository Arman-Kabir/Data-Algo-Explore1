// 10-- > 5-- > 16

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

class LinkedList {
    constructor(value){
        this.head={
            value:value,
            next:null
        }
    }
}

const myLinkedList = new LinkedList(10);