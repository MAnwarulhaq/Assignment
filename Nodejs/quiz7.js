function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  const input = "racecar";
  const result = isPalindrome(input);
  console.log(result); 
  