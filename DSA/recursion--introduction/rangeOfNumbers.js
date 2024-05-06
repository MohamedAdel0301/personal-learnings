//Given a range where start <= end, return an array containing all elements inbetween

let result = [];

const rangeRecursive = (start, end) => {
  if (start === end) return;
  else {
    result.push(start);
    rangeRecursive(start + 1, end);
  }
  return;
};

console.log(rangeRecursive(1, 5)); //undefined call
console.log(result); //[1,2,3,4]
