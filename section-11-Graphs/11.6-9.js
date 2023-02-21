
// Graph 
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
console.log(myGraph);