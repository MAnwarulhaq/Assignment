function getUniqueStrings(arr) {
    return [...new Set(arr)];

}
const myArray = ['Ali', 'Anwar', 'Akbar', 'Mohib', 'Faizan', 'Hassan'];
const uniqueStrings = getUniqueStrings(myArray);
console.log(uniqueStrings); 

  