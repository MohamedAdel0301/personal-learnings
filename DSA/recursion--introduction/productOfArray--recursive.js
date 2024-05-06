//given an array of nums:[1,2,3,4], an output of 24 is produced

const productArray = (nums) => {
  if (nums.length === 0) return 1;
  return nums[0] * productArray(nums.slice(1));
};

console.log(productArray([1, 2, 3, 4]));
