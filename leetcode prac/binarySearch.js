
function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    
    // To keep track of the index in relation to the main array. 
    var startIndex = 0 
    var endIndex = arr.length - 1


    while(startIndex != endIndex) {

      var mid = Math.floor((startIndex + endIndex) / 2)

      if(arr[mid] == element){
        return mid 
      } else if(arr[mid] > element) {
        endIndex = mid - 1
      } else {
        startIndex = mid + 1
      }

    }
     
    // Doesn't matter startIndex or endIndex
    // At this point in time, startIndex is equal to endIndex
    if(arr[startIndex] == element){
      return startIndex
    } else {
      return -1
    }
    
}   




//********** Always return the recursive function!!!

// Recursion

  function recursiveBinarySearch(arr,element){

    var end = arr.length - 1
    
    function helper(startIndex,endIndex,arr,element){
      
        if(startIndex == endIndex){
          if(arr[startIndex] == element){
            return startIndex
          } else {
            return -1
          }
        } else {

          var mid = Math.floor((endIndex + startIndex) / 2);
        
          if(element == arr[mid]){
            return mid
          } else if(element > arr[mid]){
            return helper(mid + 1, endIndex, arr, element);
          } else {
            return helper(startIndex, mid - 1, arr , element);
          }
        }
    }

    return helper(0,end,arr,element);
  }


 




