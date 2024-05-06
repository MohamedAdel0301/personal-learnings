//time complexity: O(n^2)
const fibRecursive = (n) => {
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

console.log(fibRecursive(7)); //13
console.log(fibRecursive(15)); //610

