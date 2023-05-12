function firstGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 10) {
        return i;
      }
    }
    return -1; // If no number is found that satisfies the condition
  }
  
  // Example usage
  const numbers = [1, 5, 15, 20];
  const result = firstGreater(numbers);
  console.log(result); // Output: 2
  