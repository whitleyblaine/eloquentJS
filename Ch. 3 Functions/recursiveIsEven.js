function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false; 
  } else {
    if (num > 0) {
      var newNum = num - 2;
    } else {
      var newNum = num + 2;
    }
    return isEven(newNum);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false