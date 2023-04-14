function findLongestString(arr) {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest) {
        longest = arr[i].length;
      }
    }
    return longest;
  }
  const strings = ['apple', 'banana', 'pear', 'watermelon'];
  const longestLength = findLongestString(strings);
  console.log(longestLength); 
    