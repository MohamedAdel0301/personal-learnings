//O(n) time complexity solution

const solution1 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const letterMap = {};
  for (let element of str1) {
    letterMap[element] ? (letterMap[element] += 1) : (letterMap[element] = 1);
  }
  for (let element of str2) {
    if (!letterMap[element]) {
      return false;
    } else {
      letterMap[element] -= 1;
    }
  }
  return true;
};

//Testcases

console.log(solution1("racecar", "racecar")); //true
console.log(solution1("anagram", "nagaram")); //true
console.log(solution1("rat", "car")); //false
console.log(solution1("qwerty", "tyqwer")); //true
console.log(solution1("", "")); //true
