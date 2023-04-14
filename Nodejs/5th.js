function getKeys(obj) {
    return Object.keys(obj);
  }
  const person = { name: 'John', age: 30, city: 'New York' };
  const keys = getKeys(person);
  console.log(keys); // Output: ['name', 'age', 'city']
    