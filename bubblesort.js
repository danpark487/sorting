// function bubbleSort(arr) {
// 	let swaps = false;
// 	let last = arr.length-1;
// 	while (last > 0) {
// 		for (let i = 0; i < last; i++) {
// 			if (arr[i] > arr[i+1]) {
// 				let buff = arr[i];
// 				arr[i] = arr[i+1];
// 				arr[i+1] = buff;
// 				swaps = true;
// 			}
// 		}
// 		if (swaps === false) {
// 			return arr;
// 		}
// 		last--;		
// 	}
// 	return arr;
// }



// function bubbleSort(arr) {

// 	let swaps = false;
// 	let last = arr.length-1;
// 	while (last > 0) {
// 		for (let i = 0; i < last; i++) {
// 			if (arr[i] > arr[i+1]) {
// 				let buff = arr[i];
// 				arr[i] = arr[i+1];
// 				arr[i+1] = buff;
// 				swaps = true;
// 			}
// 		}
// 		if (swaps === false) {
// 			return arr;
// 		}
// 		last--;
// 	}
// 	return arr;
// }
function bubbleSort(unsortedArr) {
	let sortedArr = unsortedArr;
	let endOfSort = unsortedArr.length-1;
	let swaps = false;
	while (endOfSort > 1) {
		for (let i = 0; i < endOfSort; i++) {
			if (sortedArr[i] > sortedArr[i+1]) {
				let buff = sortedArr[i+1];
				sortedArr[i+1] = sortedArr[i];
				sortedArr[i] = buff;
				swaps = true;
			}
		}
		if (swaps === false) return sortedArr;
		endOfSort--;
	}
	return sortedArr;
}



















































