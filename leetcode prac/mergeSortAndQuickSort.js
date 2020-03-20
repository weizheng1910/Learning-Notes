console.log("linked")
function mergeSort(arr){

	// var indexOfLastElement = arr.length - 1;
	// var midPoint = Math.floor(indexOfLastElement/2);

	function merge(array1,array2){
		var resultArray = [];
		var arrayOne = array1;
		var arrayTwo = array2;
		
		while(arrayOne.length > 0 && arrayTwo.length > 0){
			if(arrayOne[0] < arrayTwo[0]){
				resultArray.push(arrayOne[0]);
				arrayOne = arrayOne.slice(1);
				
			} else {
				resultArray.push(arrayTwo[0]);
				arrayTwo = arrayTwo.slice(1);
				
			}
		}

		if(arrayOne.length == 0){
			resultArray = resultArray.concat(arrayTwo)
			
		} else if(arrayTwo.length == 0){
			resultArray = resultArray.concat(arrayOne)
			
		}

		return resultArray;
	}

	function mergeBreakdown(arr){
	if (arr.length < 2) {
		return arr;
	}

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

	return merge(mergeBreakdown(left),mergeBreakdown(right))
	}

	return mergeBreakdown(arr)
}


var x = [2,3,4,5] 
var y = [1,6,7,8]


// ** Do a for loop instead of a while loop. DONE
// ** Pay attention to what happens if itemFromLeft or itemFromRight can't be found. DONE

function quickSort(arr){
	
	if(arr.length == 1 || arr.length == 0){
		return arr
	} else {
	
	function swap(a,b,array){
		var temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	}

	// In this sort, our partition will be the last element of the quickSort array
	var lastIndex = arr.length - 1;
	var partition = arr[lastIndex];

	// var index is the position the partition will be inserted
	// All elements less than partition will be on the left, those greater than it on the right
	var index = 0;

	for (let i = 0; i < lastIndex; i++){
		if(arr[i] <= partition){
			swap(i,index,arr);
			index++
			//So that the index will never be more that the lastIndex
		}
	}

	//Insert the partition in between elements less than partition and those greater than partition
	swap(lastIndex,index,arr);
	
	//Left part of the partition is sorted, recursively do a quickSort on the right side.
	return quickSort(arr.slice(0,index)).concat(arr[index]).concat(quickSort(arr.slice(index+1)))
	}//end else
}

console.log(quickSort([4,3,2,1]));
console.log("test")


function merge(array1,array2){
		var resultArray = [];
		var arrayOne = array1;
		var arrayTwo = array2;
		
		while(arrayOne.length > 0 && arrayTwo.length > 0){
			if(arrayOne[0] < arrayTwo[0]){
				resultArray.push(arrayOne[0]);
				arrayOne = arrayOne.slice(1);
				console.log(resultArray)
			} else {
				resultArray.push(arrayTwo[0]);
				arrayTwo = arrayTwo.slice(1);
				console.log(resultArray)
			}
		}

		if(arrayOne.length == 0){
			resultArray = resultArray.concat(arrayTwo)
			console.log(resultArray)
		} else if(arrayTwo.length == 0){
			resultArray = resultArray.concat(arrayOne)
			console.log(resultArray)
		}

		return resultArray;
	}