// Lesson learnt: this.data = data! NOT this.data: data

class Node{
    constructor(data){
        // a Node starts with a given data property
        this.data = data;
        // a Node also has a .next property initialized as null
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
      var newNode = new Node(data);
      var walker = this.head
      
      
      if(this.head == null){
        this.head = newNode;
      } else {

        while(walker.next){
          walker = walker.next;
        }
        
        walker.next = newNode;
      }

    }

    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        var newNode = new Node(data);
        if(this.head != null){
            var temp = this.head;
            this.head = newNode;
            newNode.next = temp;
        } else {
            this.head = newNode;
        }
    }
    pop(){
        // Removes the last node from the list and returns it

        // var i keeps track of the node we are in
            var i = 0;

            if(this.head != null){
            // The below statement represents a step into the next node.
            // From the head.
                var walker = this.head;
                i++;

                // We will traverse if a next node is available.
                while(walker.next){
                    // The reassignment represents a move
                    walker = walker.next;
                    i++;
                }
            } else {
                i = 0;
            }

            // j represents the number of steps we need to make before stopping to delete the next node.
            var j = i - 1;

            
            // j == -1 means that the head is empty, thus nothing needs to be done.
            if(j == 0) {
                var deletedNode = this.head;
                this.head = null;
                return deletedNode

            } else {

                var walker = this.head;
                j--;

                while(j > 0){
                    walk = walker.next
                    j--;
                }
                
                //Save this node before deleting it from the list
                var deletedNode = walker.next 

                //Break the link (or delete it so to speak)
                walker.next = null;

                //Return node which was deleted
                return deletedNode
            }
    }
    removeFromFront(){
        // remove the head node from the list and return it
        var deletedHeadNode = this.head;
        this.head = this.head.next;
        return  deletedHeadNode
        // the next node in the list is the new head node
                                      
        
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        if( X == 0){
            var temp = this.head;
            this.head = new Node(data);
            this.head.next = temp;

        } else if( X > 0){
            var walker = this.head;
            X--; 

            while( X > 0){
                walker = walker.next
                X--;
            }

            var temp = walker.next;
            var newNode = new Node(data);
            walker.next = newNode;
            newNode.next = temp;

        }
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
        if(X == 0){
          var deletedNode = this.head;
          var temp = this.head.next;
          this.head = temp;
          return deletedNode
        } else if(X > 0) {

          var walker = this.head;

          while(true){

            if(X == 1){
                break;
            }

            walker = walker.next;
            X--;

          }
          
          var deletedNode = walker.next
          var temp = walker.next.next;
          walker.next = temp;
          return deletedNode;
          
        }
    }
    search(data){
        var index = 0;
        var walker = this.head;
        while(walker){
            if(walker.data == data){
                break;
            } else {
                index++
                if(walker.next == null){
                    return false;
                }
                walker = walker.next;
            }


        }
        return index
    }
    sort(){
        // sort the Linked List in ascending order of data values
      var list = []
      var walker = this.head
      while(walker){
        if(walker.data){
          list.push(walker.data);
          walker = walker.next;
        }
      }//end while
      
      var sortedlist = insertionSort(list);
      let answer = new LinkedList();
      
      while(sortedlist.length > 0){
        answer.appendNode(sortedlist.shift())
      }
      
      return answer;
      
      function insertionSort (array) {
            for(let i = 0; i < array.length; i++){
                var currElement = array[i];
                while(array[i] < array[i-1]){
                var temp = array[i];
                array[i] = array[i-1];
                array[i-1] = temp;
                i--
                }
            }
            return array;
        }
      
    }//endSort
}

//Head shouldn't have data

let x = new LinkedList();
x.appendNode(2);
x.appendNode(3);
x.appendNode(1);
x.appendNode(5);
x.appendNode(4);


