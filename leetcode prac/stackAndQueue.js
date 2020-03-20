// Implementing Stacks in Linked List

class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next
	}
}

class Stack {
	constructor() {
		this.head = null;
	}

	// Looking at the last element in the list
	peek() {
		var walker = this.head; 

		while (walker.next){
			walker = walker.next;
		}

		return walker.data;

	}

	// Adding a new element to the end of the list
	push(data) {
		var newNode = new Node(data);

		var walker = this.head; 

		while (walker.next){
			walker = walker.next;
		}

		walker.next = newNode


	}

	pop() {

		var index = 0;
		var walker = this.head;
		index++ 

		while (walker.next){
			walker = walker.next;
			index++
		}

		var traverseUntil = index - 1;
		var walker2 = this.head;

		while(traverseUntil > 0){
			walker2 = walker2.next;
		}
		var deletedNode = walker2.next;
		walker2.next = null;
		return walker2;
	}

	isEmpty() {
		if(this.head == null){
			return true
		} else {
			return false
		}


	}
}

// Stacks Array Implementation

class Stack {
	constructor() {
		this.items = []
	}

	push(item){
    	this.items.push(item);
  	}

	pop(){
	   return this.items.pop()
	}

  	peek(){
    	return this.items[this.items.length - 1]
  	}

  	isEmpty(){
    	return this.items.length === 0
  	}
}

// https://www.geeksforgeeks.org/stack-data-structure/
// https://www.geeksforgeeks.org/queue-data-structure/
