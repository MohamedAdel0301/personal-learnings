//write a function to reverse an array using recursion
function reverse(arr) {
  if (arr.length === 0) return [];
  let reversed = reverse(arr.slice(1)) + arr[0];
  return reversed;
}

console.log(reverse(["h", "e", "l", "l", "o"])); //['o','l','l','e','h']
