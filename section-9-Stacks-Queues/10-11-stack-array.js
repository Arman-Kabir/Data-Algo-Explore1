// stack using array

class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.pop();
// myStack.pop();
console.log(myStack);
console.log(myStack.peek());