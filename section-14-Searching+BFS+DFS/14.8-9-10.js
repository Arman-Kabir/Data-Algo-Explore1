/*  14.8//
If you know a solution is not far from the root of the tree: BFS

If the tree is very deep and solutions are rare: BFS( DFS will take long)

If the tree is very wide: DFS (BFS will need to much memory) -- BFS has to keep track of the nodes
 in the current level in queue that will take too much memory


If solutions are frequent but located deep in the tree:DFS

determining whether a path exists between two nodes: DFS

Finding the shortest path: BFS

****/


// 14.9-- In BFS - We have to go from the top, then to the left and
//  then visit all the nodes in that level. I uses a lot of memory.
// We have to keep track of the children of the level that we're on.



// 14.10 Solution BFS vs DFS

