//Sliding window algorithms are useful for keeping track of
//a subset of data inside an array or a string.

//input: Array: number[], Sliding window size: n
//output: the larget sum obtainable from an array
//Naive method O(n^2) Time complexity
const maxSubArraySumNaive = (nums, n) => {
  if (n > nums.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < nums.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += nums[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

//Testcases
// console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 2)); //10
// console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 4)); //17

const maxSubArraySumSlidingWindow = (nums, n) => {
  if (n > nums.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += nums[i];
  }
  tempSum = maxSum;
  for (let i = n; i < nums.length; i++) {
    tempSum = tempSum - nums[i - n] + nums[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubArraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)); //17
