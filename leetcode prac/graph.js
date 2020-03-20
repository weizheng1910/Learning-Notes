// Graphs
/* We can refer to properties of an object using the dot notation, 
   Like how we look up elements by their index, square Notation allows us to dynamically look up 
   properties in an object, which dot notation doesn't allow us to do. 
*/

/*
	Thoughts:
	null is when a variable is declared but no value has been assigned to it.
	undefined is when a variable or thing doesn't exist because it has not been defined.
	Both are falsey values.
*/
class Graph {
	constructor() {
	// Create a property called `nodes` and set it equal to an empty object.
		this.nodes = {}
	// This will be our adjacency list.
	}

	addNode(node) {
	// If the node value passed in does not already exist in our adjacency
		if(this.nodes[node]){
			return "Already exists"
		} else {
			this.nodes[node] = [];
			return this
		}
	// list, then add it as a key and set it equal to an empty array.
	}

	addEdge(node, edge) {
	// If the node exists in our adjacency list, then push the edge into the
	// array of edges for that node.

		var currNode = this.nodes[node]

		if(currNode){
			currNode.push(edge);
		} else {
			return "Node doesn't exist"
		}

		// this.addNode(edge);
		// var edgeNode = this.nodes[edge];
		// edgeNode.push(node);

	}
}

var graph = new Graph