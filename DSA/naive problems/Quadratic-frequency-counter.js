// O(n^2) Time complexity solution
// O(1) space

const solution1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

// Test1
console.log(solution1([1, 2, 3, 4], [1, 4, 9, 16])); //true
console.log(solution1([1, 2, 3, 4], [1, 4, 9, 16, 25])); //false
console.log(solution1([], [])); //true

//O(n) Time complexity solution
//O(n) Space

const solution2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const freqMap1 = {};
  const freqMap2 = {};
  for (let i = 0; i < arr1.length; i++) {
    freqMap1[arr1[i]] = (freqMap1[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    freqMap2[arr2[i]] = (freqMap2[arr2[i]] || 0) + 1;
  }
  for (let key in freqMap1) {
    if (!(key ** 2 in freqMap2)) return false;
    if (freqMap1[key] !== freqMap2[key ** 2]) return false;
  }
  return true;
};

//Test 2
console.log(solution2([1, 2, 3, 4], [1, 4, 9, 16])); //true
console.log(solution2([1, 2, 3, 4], [1, 4, 9, 16, 25])); //false
console.log(solution2([], [])); //true
