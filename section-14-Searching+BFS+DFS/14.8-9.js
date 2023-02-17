/*  14.8//
If you know a solution is not far from the root of the tree:

If the tree is very deep and solutions are rare:

If the tree is very wide:

If solutions are frequent but located deep in the tree:

determining whether a path exists between two nodes:

Finding the shortest path:

****/



// 14.9-- In BFS - We have to go from the top, then to the left and
//  then visit all the nodes in that level. I uses a lot of memory.
// We have to keep track of the children of the level that we're on.