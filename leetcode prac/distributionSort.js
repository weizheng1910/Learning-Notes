function bucketSort(list){
	// Find the minimum in the list 
	// 1st argument is null because there isn't an object through which this function is executed.
	var min = Math.min.apply(null,list);
	var max = Math.max.apply(null,list);

	var buckets = [];
	// Every element in the list is subtracted by the minimum to "standardise" the dataset
	// i.e. The smallest element starts from zero. 

	// To find out which bucket the element should be in,
	// We divide each element by the max to find out its value in proportion to the element with the highest value.
	// So that when we multiply the element by the no. of buckets,
	// We will get the index of the bucket in which the element should be placed.
	
	for(let i = 0; i < list.length; i++){

		var newIndex = Math.floor((list[i] - min) / max) * 200;

		// buckets[i] is the ith bucket. If the bucket is undefined,
		// Create an empty bucket, []. If the bucket exists, leave it as it is. 
		buckets[newIndex] = buckets[newIndex] || [];
		buckets[newIndex].push(list[i]);
	}

	// Once the elements are sorted into buckets, we apply a sorting algorithm within each bucket.
	// For every bucket, sort the elements within a sorting algorithm.
	// And then push it into the list.

	// The variable idx represents index
	// It is used to push the elements in the bucket into the list.
	
	var idx = 0;

	for(let i = 0; i < buckets.length; i++){
		
		// For buckets which are not empty, do a insertion sort.
		if(buckets[i]){
			

			insertionSort(buckets[i]);

			//Starting from the first bucket, populate each element in the bucket into the list.
			for(let j = 0; j < buckets[i].length; j++){
				list[idx] = buckets[i][j];
				idx++;
			}	
		}
	}
	return list;
}

// Insertion sort to be used within each bucket. 
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