var zigZag = function(s,numRows){
  const arr = [];
  for(let i = 0; i < numRows; i++) arr.push([]);
    var dir = 'd';
    var i = 0;
    var j = 0;
      for(let k = 0; k < s.length; k++){
        arr[i][j] = s[k];
        if (dir == 'd'){
        if(i == numRows-1){
          j += 1;
          i += -1;
          dir = 'u'
         } else {
          i += 1;
         }
        } else if(dir == 'u'){
          // if dir is up
          if(i == 0){
            i += 1;
            dir = 'd';
          } else {
            j += 1;
            i -= 1;
          }
        } 
      }
    return arr;
  }

 
  



  

  