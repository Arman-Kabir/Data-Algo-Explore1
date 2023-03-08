// Insert - O(1), Lookup - O(1), Delete - O(1), Search - O(1)

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('ahhhhh');
    }
}

// age,name,magic,and function scream are all going to get placed somewhere in memory in different
// addresses. But we can access them really really fast. 

console.log(user.age); //O(1)
console.log(user.spell = 'halum halum'); //O(1)
console.log(user.scream );
console.log(user);

// Our computer has limited space and when we create an object or hash table the computer decides
// how much space to allocate

// COLLISION -- when u have a collission it slows down reading and writing with hash table with O(n)
// and divided by k where k is the size of your hash table.-- O(n/k).
// Coalition will happen in every hash table implementation.
// Two ways to deal with these collissions.


