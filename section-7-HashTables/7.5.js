// Exercise implement a hash table
// Instantiating an array
// We need a hash function in order to create a hash table
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 1) %
            this.data.length
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
// myHashTable.set('grapes',10000);
// myHashTable.get('grapes');

console.log(myHashTable._hash('grapes'));

/*
buckets - where data lives in
*/

