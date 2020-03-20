var a = "abcba"

function palindrome(s) {  
  
  function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
  }
  
  
  var list = []; 

  for (i = 0; i < s.length; i++){
    for(j = 3; j <= s.length - i; j++){
      //Finding every combination of substring
      var subString =s.slice(i,i+j);
      
      if ((subString.length)%2 == 1){
        //If length of string is odd number,
        var mid = Math.floor(subString.length/2)
        //Do the palindrome test.
        if (subString.slice(0,mid) == reverseString(subString.slice(mid+1,(subString.length)))){
          list.push(subString);
        }
      } else {
        //If length of string is even number,
        var midx = subString.length/2
        //Do the palindrome test.
        if (subString.slice(0,midx) == reverseString(subString.slice(midx,(subString.length)))){
          list.push(subString);
        }
      }
    }
  }
  
  console.log(list)
  //AMONG LIST, FIND THE LONGEST STRING
  var answer = "";
  for(let i = 0 ; i < list.length; i++){
    if(list[i].length > answer.length){
      answer = list[i];
    }
  }

  return(answer)
}

