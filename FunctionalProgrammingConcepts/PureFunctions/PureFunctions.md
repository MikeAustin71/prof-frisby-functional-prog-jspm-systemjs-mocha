# Pure Function
A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

Professor Frisby

## slice IS a Pure Function
[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* The slice() method returns a shallow copy of a portion of an array into a new array object.
* arr.slice([begin[, end]])
* begin - Zero-based index at which to begin extraction. (If begin is omitted, zero begin is assumed)
* end Zero-based index at which to end extraction. slice extracts up to but not including end.
* slice(1,4) extracts the second element up to the fourth element (elements indexed 1, 2, and 3).

## splice is NOT a Pure Function
[splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

**array.splice(start, deleteCount[, item1[, item2[, ...]]])**

The splice() method changes the content of an array by removing existing elements and/or adding new elements.

* start - Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.

* deleteCount -An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at start, then all of the elements through the end of the array will be deleted.

* itemN -The element to add to the array. If you don't specify any elements, splice() will only remove elements from the array.

#### returns
An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

## Pure Functions Can Run In Parallel
Finally, and here's the coup de grâce, we can run any pure function in parallel since it does not need access to shared memory and it cannot, by definition, have a race condition due to some side effect.
