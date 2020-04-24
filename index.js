"use strict";

// helper function to swap two elements in an array
var swap = function (arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

// helper function returns pivot point
var pivot = function (arr, left = 0, right = arr.length - 1) {
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    // Move all the small elements on the left side
    if (arr[i] < arr[left]) swap(arr, i, ++shift);
  }

  // Swap last element with the left
  swap(arr, left, shift);
  return shift;
};

// default values will be used when none are provided
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    // Recursively call function to the left and right of pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(
  quickSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92,
  ])
);
