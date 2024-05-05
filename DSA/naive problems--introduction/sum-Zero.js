//Given function is a sorted number list that has positive & negative numbers
//return indices of solution or undefined if no solution exists

//Naive solution
//O(n^2) time complexity
const sumZeroNaive = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]];
      }
    }
  }
};

//Testcases
// console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
// console.log(sumZeroNaive([-3, -1, 0, 1])); //[-1,1]
// console.log(sumZeroNaive([0, 1, 2, 3])); //undefined

//Two pointers solution
//O(n) time complexity

const sumZeroPointers = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum === 0) {
      return [nums[l], nums[r]];
    } else if (sum > 0) {
      r--;
    } else {
      l++;
    }
  }
};

//Testcases
console.log(sumZeroPointers([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZeroPointers([-3, -1, 0, 1])); //[-1,1]
console.log(sumZeroPointers([0, 1, 2, 3])); //undefined
