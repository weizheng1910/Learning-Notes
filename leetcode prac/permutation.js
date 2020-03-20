var permute = function(nums){
  
  let list = [];
  
  let helper = function(prefix,suffix){
    if(suffix.length == 0){
      list.push(prefix.slice(0))  
    } else {
      for(let i = 0; i < suffix.length; i++){
       var a = prefix.concat(suffix[i]);
       var b = suffix.slice(0,i).concat(suffix.slice(i+1,suffix.length));
       helper(a,b); 
      } 
    }
  }
    helper([],nums);
    return list;  
}