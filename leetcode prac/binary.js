class BinaryNode {
    constructor(data){
    // a node has data, left, and right pointers
    this.data = data;
    this.left = null;
    this.right = null;
    // left and right are intialized as null
    }
}

class BinaryTree {
    constructor(){
        // when a new Tree is made, it has a root property
        this.root = null;
    }

    insert(data){
        // add a new Node to the tree, with data as the Node's data
        var currNode = this.root

        if(this.root == null){
            this.root = new BinaryNode(data);
        } else {
            while(true){
                if(data > currNode.data){
                    if(currNode.right == null){
                        currNode.right = new BinaryNode(data);
                        break;
                    } else {
                        currNode = currNode.right;
                    }
                } else {
                    if(currNode.left == null){
                        currNode.left = new BinaryNode(data);
                        break;
                    } else {
                        currNode = currNode.left;
                    }
                }
            }
        }
        return this
    }

    search(val){
        // search the Tree for a node with the given value
        var currNode = this.root;

        if(this.root == null){
            return false
        } else {

            while(currNode != null){

                if(val == currNode.data){
                    return currNode
                } else if(val > currNode.data){
                    currNode = currNode.right
                } else {
                    currNode = currNode.left
                }
            }

            return false;
        }
        // if the node exists, return it
        // if the node doesn't exist, return false
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node
        function sum(node){
            if(node.left == null && node.right == null){
                return 1
            } else if(node.left == null && node.right != null){
                return sum(node.right) + 1
            } else if(node.left != null && node.right == null){
                return sum(node.left) + 1
            } else {
                return sum(node.left) + sum(node.right) + 1
            }
        }

        return sum(node)
    }
    getMax(){
        // return the maximum value stored in the tree
        var currNode = this.root
        while(currNode.right){
            currNode = currNode.right;
        }
        return currNode.data
    }
    height(node){
        // calculate the maximum amount of nodes in any one path from the given node
        function maxDepth(node){
            if(node.left == null && node.right == null){
                return 0
            } else if(node.left == null && node.right != null){
                return maxDepth(node.right) + 1
            } else if(node.left != null && node.right == null){
                return maxDepth(node.left) + 1
            } else {
                return maxDepth(node.left) + maxDepth(node.right) + 1
            }
        }
        return maxDepth(node)
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
            return false
        } else {
            return true
        }
    }
}

var tree = new BinaryTree;
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(11);
tree.insert(13);

