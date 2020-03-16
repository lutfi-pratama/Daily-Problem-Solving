// PALINDROME STRING CHECKER WITH REGULAR EXPRESSION (REGEX) ALPHANUMERIC

function palindrome (str){
  
  // with alphanumeric (just number + alphabenth)
  var reg = /[\W_]/g;  // use Regular Expression (RegEx) to filter string  
  str = str.toLowerCase().replace(reg, ""); // find regex along of str and remove that with replace
  

  // main calculating
  var reverse = str.split("").reverse().join("");

  if (reverse === str) return true;
  return false;  
}

console.log(palindrome("eyer"));
