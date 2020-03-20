console.log("linked")

function quickSort(arr){
	
	if(arr.length == 1 || arr.length == 0){
		return arr
	} else {
	
	function swap(a,b,array){
		var temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	}

	var lastIndex = arr.length - 1;
	
	var partition = arr[lastIndex];
	
	var index = 0;

	for (let i = 0; i < lastIndex; i++){
		if(arr[i] <= partition){
			swap(i,index,arr);
			index++

			//So that the index will never be more that the lastIndex
			
			
		}
	}

	swap(lastIndex,index,arr);
	
	return quickSort(arr.slice(0,index)).concat(arr[index]).concat(quickSort(arr.slice(index+1)))
	}//end else
}

var array = [6,7,8,1,2,3,5];