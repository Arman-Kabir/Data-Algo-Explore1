// 6.1
/*
    *Arrays are sometimes called lists organizes items sequentially. Means one after another in memory.
    *They're stored in contiguous memory that is in order.
    *If u need to store some data and iterate over it that go one by one step by step.
    *---Arrsys are the best choice.Specially if u know the indices.

    lookup  O(1)
    push    O(1)
    insert  O(n)
    delete  O(n)
    [] --square bracket notation
*/

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage in a 32-bit system. 4 selves to store letter or item "a". items = 4

// strings[2];

//push - add something at the end
strings.push('e');  //O(1)

// pop - remove the last item
strings.pop();   //O(1)

// unshift - add at the beginning
strings.unshift('x');   //O(n)

// splice -- add something in the middle of the array
strings.splice(2, 0, 'alien');    //O(n)


console.log(strings);



// 6.2
/*
    Two types of arrays
    *static
     *dynamic

     static array in c++ -- we have to allocate memory while declaring
     int a [20]
     int b [5] ===== [1,2,3,4,5]

     In js, we don't have to worry about it. We never allocate memory.

     In js and python-- they work with dynamic arrays.Means they automatically allocate memory
      according to the increase in size of the array.

      Dynamic expands as u add elements.

*/



// 6.4 - we are talk about some advanced objects concepts
/*
    3 things that are important with objects  *reference type  *context  *instantiation

    Objects are called the reference types in js. it's non-primitive type and
     not drfined by the programming languages.

*/

[] === []
console.log([] === []);
console.log([1] === [1]);

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15

console.log(object2.value);
console.log(object3.value);


// context vs scope
/*
    *Scope is created when it sees curly braces.

    *Context tells u where we are within the object

    *this refers to what object it's inside of
*/
const object4 = {
    a: function () {
        console.log(this);
    }
}

console.log(object4.a);


// Instantiation
/*
    * Instantiation is when we make a copy of an object and re-use the code. 
    * u'r making instances or multiple copies of an object
*/

class Player {
    constructor(name, type) {
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
    /*
        Explanation ::: Every time I'm making a copy of a player ,the first thing that gets run
        is the constructor function and this constructor function is gonna create these properties
         on the player object so, name and a type.

         Then i can create anything that i want for the player.

         let's say we want to create a method such as introduce().
    */
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard',this);
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }

    /*
        I want Wizard to extend whatever a player has.
        * Anytime we extend something we need to also call the constructor function of the Player. ---
        We have to do something called super with the properties that we want to pass to the constructor.

        *when u extenda a class u need to use super so that u essentially have access to these. 


    */
}

const wizard1 = new Wizard('shelly','Healer');
const wizard2 = new Wizard('shawn','Dark magic');

console.log(wizard1);
console.log(wizard1.play());
console.log(wizard1.introduce());
console.log(wizard2);
console.log(wizard2.play());
console.log(wizard2.introduce());
