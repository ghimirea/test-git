// ? Write necessary unit tests and implement the functions for the questions below.
//! 1-) Write a function ‘sumOfTwoArrays’ that takes 2 arrays as a parameter and returns an array that holds sum of the values at the same indices. If the arraysizes are different, the values are 0 in the missing indices.
//! Example:
//!  array1    array2    result
//! [1,2,3]   [4,5,6]  [5,7,9]
//!  [1,2]     [4,5,6]  [5,7,6]
//! [1,2,3]    [4,5]   [5,7,3]

sumOfTwoArrays = (arr1, arr2) => {
  let sum = [];
  if (arr1.length || arr2.length) {
    if (arr1.length === arr2.length) {
      arr1.forEach((element, index) => {
        sum[index] = arr1[index] + arr2[index];
      });
      return sum;
    } else if (arr1.length > arr2.length) {
      arr1.forEach((element, index) => {
        if (arr2[index] === undefined) {
          arr2[index] = 0;
        }
        sum[index] = arr1[index] + arr2[index];
      });
      return sum;
    } else if (arr1.length < arr2.length) {
      arr2.forEach((element, index) => {
        if (arr1[index] === undefined) {
          arr1[index] = 0;
        }
        sum[index] = arr2[index] + arr1[index];
      });

      return sum;
    } else {
      return console.log('Missing sth');
    }
  } else {
    return [];
  }
};

module.exports = sumOfTwoArrays;
