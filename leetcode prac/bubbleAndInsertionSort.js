function bubbleSort(array) {
  var swapHappened = true;
  while(swapHappened == true){
    swapHappened = false;
    
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        // Swap 
        var temp = array[i]
        array[i] = array[i+1];
        array[i+1] = temp;
        swapHappened = true;
      }
    }
  }
  return array;
}
    

function insertionSort (array) {
  for(let i = 0; i < array.length; i++){
    
    let j = i;
    
    while(array[j] < array[j-1]){
      var temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--
    }
  }
  return array;
}
 












 // Loop through each element

  // store the current item value so it can be placed correctly
  // in the sorted portion of the array

  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!