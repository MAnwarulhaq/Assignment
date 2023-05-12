function stringLengths(arr) {
    const lengths = [];
    for (let i = 0; i < arr.length; i++) {
      lengths.push(arr[i].length);
    }
    return lengths;
  }
  
  const strings = ["hi", "hello", "hey", "howdy"];
  const result = stringLengths(strings);
  console.log(result);
  