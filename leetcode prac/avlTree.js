/*
The main issue I had with this problem is trying to come up with the algorithm such that 
the AVL tree autobalances itself after inserting a node. 

The difficulty lies in being able to find out: 
1. The moment the tree becomes inbalanced.
2. What kind of imbalanced it is, and the rotation it needs to do, and on which node.

There is no way of keep track of the imbalanced using the height property, so I decided to make 
use of the isBalanced method derived from the previous binary tree exercise.

With this method, I will be able to know when the tree becomes imbalanced after adding,
but i do not know where.

The data structure of a binary tree makes it impossible to traverse back to its parentNode easily.

Keeping in mid that I have to know:
1.which node to rotate,
2.which rotation to do

I had to KEEP TRACK of the path the computer traverse through ( i.e which direction it is in, and which node it was on)
before adding the node which caused the imbalance.

And I only need to know the last 2 nodes which was imbalanced - these are the only 2 nodes needed for the rotation.

So I decided to create 2 list, nodesDirection, and nodesTravelled to keep track of the path during the addition of each node.

And if it causes an imbalance return the last 2 elements of each list.
To know the type of imbalance, and the rotation needed. 

*/


class Node {
    constructor(data){
    // a node has data, left, and right pointers
    this.data = data;
    // a node also has a height property that starts at 1
    this.height = 1;
    // left and right are intialized as null
    this.left = null;
    this.right = null;
    }
}
class AVLTree {
    constructor(){
        // when a new Tree is made, it has a root property
        this.root = null;
    }
    insert(data){
        var newNode = new Node(data);
        var nodesDirection = [];
        var nodesTravelled = [];
        
        // add a new Node to the tree, with data as the Node's data
        if(this.root == null){
            this.root = newNode
            nodesTravelled.push(this.root)
        } else {
            var currNode = this.root;
            
            
            while(true){
                if(data > currNode.data){
                    if(currNode.right == null){
                        nodesDirection.push("r")
                        nodesTravelled.push(currNode)
                        currNode.right = new Node(data);
                        
                        break;
                    } else {
                        nodesDirection.push("r")
                        nodesTravelled.push(currNode)
                        currNode = currNode.right;
                        
                        
                    }
                } else {
                    if(currNode.left == null){
                        nodesDirection.push("l")
                        nodesTravelled.push(currNode)
                        currNode.left = new Node(data);
                        
                        break;
                    } else {
                        nodesDirection.push("l")
                        nodesTravelled.push(currNode)
                        currNode = currNode.left;
                        
                            
                    }

                }
            }//end while

            for(let i = 0; i < nodesTravelled.length; i++){
                nodesTravelled[i].height = this.setHeight(nodesTravelled[i]);
            }

                    //Check Balance, if not balance
            if (isNaN(this.isBalanced(this.root))){
                //If not balanced
                var pastTwoDirections = nodesDirection.slice(nodesDirection.length - 2)
                    pastTwoDirections = pastTwoDirections.join("");
                var prevTwoNodes = nodesTravelled.slice(nodesDirection.length - 2)

                if(pastTwoDirections == "ll"){
                    //rotateright @ 2nd last Node
                    this.rotateRight(prevTwoNodes[0]);
                    return this.root 
                } else if(pastTwoDirections == "rr") {
                    //rotateleft @ 2nd last Node
                    this.rotateLeft(prevTwoNodes[0])
                    return this.root
                } else if(pastTwoDirections == "lr") {
                    // rotateleft @ lastNode
                    this.rotateLeft(prevTwoNodes[1])
                    // rotate right @ 2nd lastNode
                    this.rotateRight(prevTwoNodes[0])
                    return this.root
                } else if(pastTwoDirections == "rl") {
                    //rotateright @ lastNode
                    this.rotateRight(prevTwoNodes[1])
                    //rotateleft @ 2ndlastnode
                    this.rotateLeft(prevTwoNodes[0])
                    return this.root
                }

            } else {
                return "balanced"
            }
                    
        }

    
        // insertion starts the same way as in a regular Binary Tree
        // once the node is inserted, however, check the heights for imbalance
     }   // if the new node causes imbalance, perform rotations to rebalance
    
    setHeight(node){
        // calculate and set the height property of the given node
        if(node == null){
            return 0
        } else if(node.left == null && node.right == null){
            return 1
        } else if(node.left != null && node.right == null){
            return (node.left.height) + 1
        } else if(node.left == null && node.right != null){
            return (node.right.height) + 1
        } else {
            return Math.max(node.left.height),this.setHeight(node.right.height)   
        }
        // the height is the maximum between the left and right children heights plus 1
        // the height of a node without any further nodes is 1
    }
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
        
        function checkBal(node){
            if(node.left == null && node.right == null){
                return 0
            } else if(node.left == null && node.right != null){
                return checkBal(node.right) + 1
            } else if(node.left != null && node.right == null){
                return checkBal(node.left) + 1
            } else {
                return checkBal(node.left) + checkBal(node.right)
            }
        }

        if(checkBal(node) > 1){
            return node
        } else {
            return -1
        }

        return checkBal(node)
    }
    rotateRight(node){
        // rotate the given node to the right
        var newData = node.left.data;
        var newLeft = node.left.left;
        var newRight = new Node(node.data);

        node.data = newData;
        node.left = newLeft;
        node.right = newRight;
    }
    rotateLeft(node){
        // rotate the given node to the left
        var newData = node.right.data;
        var newRight = node.right.right;
        var newLeft = new Node(node.data);

        node.data = newData;
        node.left = newLeft;
        node.right = newRight;

    }
}


// Test cases
var tree = new AVLTree;
tree.insert(5);
tree.insert(3);




// tree.insert(11);


// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.setHeight(tree.root)


