function getValuesByKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  const myArray = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  
  const ages = getValuesByKey(myArray, 'age');
  console.log(ages); 
    