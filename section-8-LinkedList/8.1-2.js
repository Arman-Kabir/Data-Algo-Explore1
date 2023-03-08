//1   // Singly and doubly linked lists

/*  Q. What problem do we encounter  with arrays ? 
    A. With static arrays - We only had a certain amount of data or memory that can be
    allocated next to each other in memory. Then both dynamic arrays and static arrays 
    can increase their memory.---Once it hits a certain limit and double up that memory
    in another location but that operation every once in a while of doubling up the
    array in order to create more memory has a performance implication and it costs us
    all O(n) .Additionally arrays also had bad performance for any sort 
    of operations like insert and delete that had to shift indexes over especially
    when u inserted or deleted any word that wasn't the end of the array.

    Then HashTables came. But the data wasn't in ordered.

    Then Linked Lists came to the rescue
*/



//2      //What is a linked list ?
/*
    as name suggests - it's a list that is linked.
    * A singly linked list contains a set of nodes. Nodes have two elements.
    * The value of the data u want to store - the number 5, and a pointer to the next node in line. 
    * The first node is called the head and the last node is called the tail, linked list are null terminated which signifies that it's the end of the list. tail node points to null
    * 
    * Linked list  -- an element that links to the next element that links to the next element and it keeps going, keeps going untill the last element that points to null. u can have any sort of data type.

*/