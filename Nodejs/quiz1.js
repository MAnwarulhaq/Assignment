function findPair(numbers, target) {
  const visitedNumbers = {};

  for (let num of numbers) {
    const complement = target - num;

    if (visitedNumbers[complement]) {
      return [complement, num];
    }

    visitedNumbers[num] = true;
  }

  return null;
}
const numbers = [2, 4, 6, 8];
const target = 10;

const pair = findPair(numbers, target);
console.log(pair);  // Output: [2, 8]
