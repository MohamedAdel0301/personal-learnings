//O(n) time complexity solution
//input is sorted array, count unique values in that array.

const countUniqueValuesSorted = (nums) => {
  if (!nums) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(
  countUniqueValuesSorted([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8,8,8,8,8,8,8]) //8
);
