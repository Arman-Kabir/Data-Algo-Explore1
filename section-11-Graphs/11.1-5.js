// 11.1 Graphs Intro
/*
    Graphs are one of the most useful and most used data structure in computer science
    when it comes to modeling real life.
    *Graphs is simply a set of values that are related in a pair wise fashion.

    * In a graph - each item is called a node or a vertex. Nodes are then connected with edges.
*/

// 11.2
/*
    1.Directed -- useful for describing traffic flow

    2.Undirected -- facebook is un directed graph

    *Weighted Graph * Weighted graph
    * Cyclic  * Acyclic
*/

// 11.3

// 11.4
/*
   * 3 ways we can think of  to build a graph

// Edge List
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]
// Adjacent Matrix Object representation
const graph = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}

*/

// 11.5  Exercise Graph Implementation

