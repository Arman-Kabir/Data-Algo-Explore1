// How to build an array - Explore more on arrays
/*
    *Arrays in js are just objects with integer based keys that act like indexes.
*/

class MyArray {
    constructor() {
        // constructor- initial function that will be run
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
        //this.data is just referring to this data that we've created in the constructor
        // <ethod simply means a function inside a class
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const lastItem = this.data[index];
        this.shiftItems(index);
        return lastItem;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray.push('hi'));
console.log(newArray.push('you'));
console.log(newArray.push('i'));
// console.log(newArray.pop());
// console.log(newArray.pop());

console.log(newArray.delete(0));

console.log(newArray.push('are'));
console.log(newArray.push('nice'));

console.log(newArray.delete(1));


console.log(newArray);
//new keyword to instantiate this or to create a copy of this class




// Previous code-1
// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {};
//     }
//     get(index) {
//         return this.data[index]
//     }
//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
//     pop() {
//         const lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     }
//     delete(index) {
//         const item = this.data[index];
//         this.shiftItems(index);
//     }
//     shiftItems(index) {
//         for (let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1];
//         this.length--;
//     }
// }

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// // newArray.pop();
// // newArray.pop();
// // newArray.delete(0);
// newArray.push('are');
// newArray.push('nice');
// newArray.delete(2);
// // newArray.push('!');
// console.log(newArray);