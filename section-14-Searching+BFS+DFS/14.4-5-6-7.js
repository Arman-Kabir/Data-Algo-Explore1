

/*14.5//  Breadth First Search / Traversal

** u start  with the root node and move left to right across the second level then
  move left to right across the third level and so on and so forth.

        9
    4       20
  1   6   15  170
  
 BFS-[9, 4, 20, 1, 6, 15, 170]
 DFS- [9, 4, 1, 6, 20, 15, 170]

*/



/*14.6//   Depth First Search/ Traversal

** The search follows one branch of the tree down as many levels as possible
 until the target node is found or the end is reached. 
*when the search can't go on any further it continues at the nearest ancestor
  with an unexplored child

  ***Depth first search has a lower memory requirement than breadth first search because
   it's not necessary to store all the child pointers at each level.
   *The idea of depth first search is that we want to go as deep as possible into a graph.

        9
    4       20
  1   6   15  170
  
 BFS-[9, 4, 20, 1, 6, 15, 170]
 DFS- [9, 4, 1, 6, 20, 15, 170]

*/ 


/*14.7// BFS vs DFS

* Time complexity for BFS and DFS is the same . They all visit the nodes at least once. O(n)

*BFS- requires more memory than DFS
*DFS- requires less memory... can get slow


*/