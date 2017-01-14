
// function merge( arr1, arr2 ) {
// 	let mergedArr = [];
// 	const totalLength = arr1.length + arr2.length;
// 	while (mergedArr.length < totalLength) {
// 		if (arr1.length < 1 || arr2.length < 1)  {
// 			if (arr1.length < 1) return mergedArr.concat(arr2);
// 			if (arr2.length < 1) return mergedArr.concat(arr1);
// 		}
// 		if (arr1[0] < arr2[0]) {
// 			mergedArr.push(arr1.shift());

// 		} else if (arr1[0] > arr2[0]) {
// 			mergedArr.push(arr2.shift());
// 		} else {
// 			mergedArr.push(arr1.shift());
// 			mergedArr.push(arr2.shift());
// 		}
// 	}
// 	return mergedArr;
// }


// function split( arr ) {

//     let firstHalf = arr.slice( 0, (arr.length/2) ),
//         secondHalf = arr.slice( (arr.length/2), arr.length );

//     return [ firstHalf, secondHalf ];
    
// };

// function mergeSort (arr) {
// 	if (arr.length < 2) return arr;



// 	return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]));



// }

// // const mergeSort = function (array) {
// //   if (array.length < 2) return array; // base case
// //   const splits = split(array),
// //         left = splits[0],
// //         right = splits[1];
// //   return merge(mergeSort(left), mergeSort(right)); // merge sorted!
// // };

// // const split = function (array) {
// //   const center = array.length / 2,
// //         left = array.slice(0, center),
// //         right = array.slice(center);
// //   return [left, right];
// // };

// // const merge = function (left, right) {
// //   const merged = [];
// //   let leftIdx = 0,
// //       rightIdx = 0;
// //   while (leftIdx < left.length && rightIdx < right.length) {
// //     if (left[leftIdx] < right[rightIdx]) {
// //       merged.push(left[leftIdx++]);
// //     } else {
// //       merged.push(right[rightIdx++]);
// //     }
// //   }
// //   for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
// //   for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
// //   return merged;
// // };





function split(arr) {
	let frontHalf = arr.slice(0, arr.length/2);
	let endHalf = arr.slice(arr.length/2, arr.length);
	return [frontHalf, endHalf];
}

function merge(frontHalf, endHalf) {
	let mergedArr = [];
	let frontPointer = 0;
	let endPointer = 0;
	let totalLength = frontHalf.length + endHalf.length;

	while (mergedArr.length < totalLength) {
		if (frontHalf[frontPointer] === undefined) {
			return mergedArr.concat(endHalf.slice(endPointer, endHalf.length));
		} else if (endHalf[endPointer] === undefined) {
			return mergedArr.concat(frontHalf.slice(frontPointer, frontHalf.length));
		}

		if (frontHalf[frontPointer] < endHalf[endPointer]) {
			mergedArr.push(frontHalf[frontPointer]);
			frontPointer++;
		} else if (frontHalf[frontPointer] > endHalf[endPointer]) {
			mergedArr.push(endHalf[endPointer]);
			endPointer++;
		} else if (frontHalf[frontPointer] === endHalf[endPointer]) {
			mergedArr.push(endHalf[endPointer]);
			mergedArr.push(frontHalf[frontPointer]);
			endPointer++;
			frontPointer++;
		}

	}
	return mergedArr;
}

function mergeSort(arr) {
	if (arr.length < 2) return arr;
	
	return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]));

}








































