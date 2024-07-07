// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

function smaller(nums) {
let arr = []
  for (let i of nums) {
    if (i - 1 < 0 || i === 0) {
        arr.push(0)
    } else if (i - 1 >= 0) {
        arr.push(i - 1)
    }
  }
    
    return arr
  }

console.log(smaller([0, 1, 2]))