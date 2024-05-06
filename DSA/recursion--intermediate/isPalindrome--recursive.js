const isPalindromeRecursive = (str) => {
  //cleanup string function
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindromeRecursive(str.slice(1, -1));
};

console.log(isPalindromeRecursive("racecar")); //true
