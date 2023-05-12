function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  const input = [1, 2, 3, 4, 5, 6];
  const result = filterEven(input);
  console.log(result); 
  