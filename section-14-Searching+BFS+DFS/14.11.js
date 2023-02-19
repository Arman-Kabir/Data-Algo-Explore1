
// 14.11  Breadth First Search/Traversal
/*
  In BFS - from the top then to the left and visit all the nodes in that level- it takes a lot of memory
  When it goes through a level - we need to keep a reference to all the children nodes of every node that
  we visit - that's where the memory is coming from.. Bcz we have to keep track of those children
  of th level that we're on.

  we r using queue data structure to keep a reference to the nodes that we want to come back
  and discover it's child nodes.


*/



// bst

class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = []; //we insert number here in the order breadth first search
        let queue = []; // to keep track of the level we're at so that we can access the children
        // we have to go back when we are at the end of the level 
        // We add to the queue the root node
        queue.push(currentNode);

        while (queue.length > 0) {
            
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    
}

// const newNode = new Node(10);
// console.log(newNode);
const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.breadthFirstSearch());

console.log(tree.lookup(20));
// tree.insert(9);

console.log(tree);


/*
        9
    4           20
1       6   15      170

BFS [9, 4, 20, 1, 6, 15, 170]
DFS [9, 4, 1, 6, 20, 15, 170]

*/