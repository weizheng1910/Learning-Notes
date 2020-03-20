// Sets
// More info: https://flaviocopes.com/javascript-data-structures-set/
console.log("linked sets.js")
class Set {
  constructor(list = []) {
    // Create a `values` property and set it equal to an empty array
    this.values = [];
    // Accept a `list` parameter (default to an empty array). Loop
    // through the array and insert each item into the set
    loop1:
    for(let i = 0; i < list.length; i++){
    	var isThereDuplicate = false
    	loop2:
    	for(let j = 0; j < i ; j++){
    		if(list[i] == list[j]){
    			isThereDuplicate = true
    			break loop2
    		}
    	}//loop2

    	if (isThereDuplicate == false){
    		this.values.push(list[i])
    	} 
    }//loop1
  }

  length() {
    // return the length of the values property
    return this.values.length
  }

  insert(val) {
    // if `val` is not in the `values` property, then push it in
    var isValPresent = false;
    for(let i = 0; i < this.values.length; i++){
    	if(this.values[i] == val){
    		isValPresent = true;
    		break
    	}
    }

    if(isValPresent == false){
    	this.values.push(val)
    	return this.values.length
    } else {
    	return false
    }

  }

  remove(val) {
    // if `val` is in the `values` property, then remove it
    var valIndex = null;
    for(let i = 0; i < this.values.length; i++){
    	if(this.values[i] == val){
    		valIndex = i;
    		break
    	}
    }

    if(!isNaN(valIndex)){
    	this.values = this.values.slice(0,valIndex).concat(this.values.slice(valIndex+1))
    	return this.values
    } else {
    	return false
    }
  }

  has(val) {
    // return true if `val` is in `values`, false if it isn't
    var isValPresent = false;
    for(let i = 0; i < this.values.length; i++){
    	if(this.values[i] == val){
    		isValPresent = true;
    		break
    	}
    }

    return isValPresent
  }

  union(set) {
    // return a new Set with the values from this Set and the
    // Set passed in as a parameter
    var withDuplicate = this.values.concat(set.values);
    var withoutDuplicate = new Set(withDuplicate);

    return withoutDuplicate
    
  }

  intersect(set) {
    // return a new Set of the values that appear in both this
    // Set and the Set passed in
    var intersectList = [];

    for(let i = 0; i < this.values.length; i++){
    	for(let j = 0; j < set.values.length; j++){
    		if(this.values[i] == set.values[j]){
    			intersectList.push(set.values[j]);
    		}
    	}
    }

    var intersectSet = new Set(intersectList)
    return intersectSet
  }

  difference(set) {
    // return a new Set of the values that only appear in one of
    // the two sets
    var union = this.union(set).values;
    var intersect = this.intersect(set).values;

    var differenceList = [];
    for(let i = 0; i < union.length; i++){
    	var isValPresent = false;
    	for(let j = 0; j < intersect.length; j++){
    		if(union[i] == intersect[j]){
    			isValPresent = true;
    		}
    	}

    	if(isValPresent == false){
    		differenceList.push(union[i]);
    	}
    }

    var differenceSet = new Set(differenceList)
    return differenceSet
  }
}

var set = new Set([2,2,2,3,3,3,1,1,1]);
