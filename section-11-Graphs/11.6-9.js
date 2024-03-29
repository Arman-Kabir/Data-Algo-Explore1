
// Graph 11.6
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {

        };
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        // Undirected Graph
        this.adjacentList[node1].push(node2); 
        this.adjacentList[node2].push(node1); 
    }
}

const myGraph = new Graph();
console.log(myGraph);
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdge('1','3');
console.log(myGraph);



// 11.7 Review // neo4j - to build complex graph database
// Scaling is hard in graph

// 11.8-9
/*  ***Data Structures                      ***Algorithms

    *Arrays     *Trees                      *Sorting
    *Stack      *Tries                      *Dynamic Programming
    *Queue      *Graphs                     *BFS+DFS(Searching)
    *Linked List *Hash Tables               *Recursion
*/

