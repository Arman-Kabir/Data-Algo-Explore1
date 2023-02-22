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
strings.splice(2,0,'alien');    //O(n)


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

// 6.3