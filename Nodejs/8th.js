function getProductOfNumbers(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}
const myArray = [2, 3, 4, 5];
const product = getProductOfNumbers(myArray);
console.log(product); 

  