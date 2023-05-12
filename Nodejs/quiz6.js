function pluck(arr, key) {
    const values = [];
    for (let i = 0; i < arr.length; i++) {
      values.push(arr[i][key]);
    }
    return values;
  }
  

  const input = [{name: "John", age: 30}, {name: "Jane", age: 25}];
  const result = pluck(input, "name");
  console.log(result); 
  