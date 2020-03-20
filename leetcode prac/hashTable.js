/* 
Hash Table

Is the process of taking a key (which is a piece of data)
and scrambling with an algorithm (hashing function) to produce an index which is the address of where it will be stored in a hash table.

The key - value pair is the pair of numbers which links the key to the index.

Hash table is a data structure which is indexed. It is where the keys will be stored.

Unlike an array, a hash table would allow data to be stored and accessed quickly and conveniently. 

In an array, you can only locate an element by going through the array one by one. 

In a hash table, you will be able to exactly where the element is in the hash table by going entering the key into the hash function. 

For this to happen, we must make sure for the same input it must always generate the same output.

However, it is two or more keys to have the same value.

This is called a collision, and there are 2 ways to work around it:

Namely: 

Open addressing aka probing
Closed addressing aka chaining

Open addressing is when: upon colllision, going down the index until an open one is found.
*/

class Node {
  constructor(key, value) {
    // should have a property called "data" that stores key and value in an array: [key, value]
    this.data = [key,value];
    // should have a reference to the next node called "next", initialized to null
    this.next = null;
  }
  get key() {
    // return the actual key from the data property
    return this.data[0]
  }
  get value() {
    // return the actual value from the data property
    return this.data[1]
  }
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {
  constructor(){
    // initialize a "head" property to null
    this.head = null;
  }
  add(key, value){
    // create a new Node with the given data as its data property
    var newNode = new Node(key,value); 
    // if this list's head is null make that node the head, 
    if(this.head == null){
    	this.head = newNode
    } else {
    // otherwise add it to end of the list
    var walker = this.head;

    while(walker.next){
    	walker = walker.next;
    }

    walker.next = newNode;

	}
  }
  delete(key){
    // search the list for a node whose data has a key that matches the key parameter
    var walker = this.head;
    if(walker.data[0] == key) {
    	var temp = this.head.next;
    	var deletedNode = walker;
    	this.head = temp;
    	return deletedNode	
    } else {
    	

    	while(walker.next){
    		if(walker.next.data[0] == key){
	    			var deletedNode = walker.next;

    			if(walker.next.next != null){ 
	    			var temp = walker.next.next;
	    			walker.next = temp;
	    			return deletedNode

    			} else {
    				walker.next = null;
    				return deletedNode

    			}
    		} else {
    		walker = walker.next;

    		}
    	}
    	return -1
    }

    // remove it from the list and return it
    // if no such node exists, return false
  }
  search(key){
    // searches the list for a given key
    var walker = this.head;
    if (walker == null){
    	return -1
    } else if(walker.data[0] == key) {
    	return walker
    } else {

	    while(walker.next){
	      if(walker.next.data[0] == key){
	        return walker.next
	      }
	      walker = walker.next
	    }

    return -1
    }
    // if it is found, return it
    // if not, return falser
  }  
}

class HashTable {
  constructor(size) {
     this.table = new Array(size);
    
  }

  hash(key) {
    // calculate and return an integer value based key, like in the lesson
   	return (key.length % 11) 
    // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering
  }

 insert(key, value) {
    // hash the key to get an integer index
    var index = this.hash(key);
    // if there's no linked list at that index in the table 
    if (this.table[index] == null){
      // create one and add it
      var newList = new LinkedList;
      this.table[index] = newList;
      // and insert this key value pair into the new Linked list
      newList.head = new Node(key,value);
    } else {
    // if there's a linked list at that index
      // if a node already exists with the key, update it the data in that node to store the new value
      var walker = this.table[index].head;
      while(walker.next){
      	if(key == walker.data[0]){
      		walker.data[1] = value;
      		return walker.data
      	}
      	walker = walker.next
      }

      this.table[index].add(key,value)

    // otherwise
      // add a new node with the given value to the end of the linked list
    // for the convenience of the user, you might wish to return the node, or you can just return true
      var newNode = new Node(key,value);
      walker.next = newNode;
      return newNode;
    }//end else
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    var index = this.hash(key);
    // if the key is, in fact, in the linked list, delete that Node and return it
    var list = this.table[index];

    if (list == null) {
    	return -1
    } else {
    	return list.delete(key);
  }
}

  search(key) {
    // hash key to get index
    var index = this.hash(key);
    console.log(index)
    // search the linked list at the index
    var list = this.table[index];
    // if a linked list can't be found 
    if(list == null){
    	return -1
    } else {
    	return list.search(key)
    }

    	
    }
    // if the key is found, return the Node
    // if not, return -1
  }


var hashtable = new HashTable(2);
hashtable.insert("hashing time", "now");
hashtable.insert("red shirt", "my first mission")
hashtable.delete("red shirt")





/*

var walker = list.head;
    	if(walker.data[0] == key){
    		var temp = walker.next.next
    		walker = walker.next.next
    	}
    	while(walker.next){
    		if(walker.next.data[0] == key){
    			// if the key is in fact in the linked list. 
    			var temp = walker.next.next;
    			var deletedNode = walker.next; 
    			walker.next = temp;
    			return deletedNode;
    		}
    		// keep travelling down the next node if it is not found.
    		walker = walker.next;
    		
    	}
    	// if you reach the end of the while loop and it still can't be found
    	return -1
    }


*/