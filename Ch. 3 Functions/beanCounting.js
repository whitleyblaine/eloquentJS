function countBs(string) {
  var bCount = 0;
  for (i=0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      bCount++;
    }
  }
  return bCount;
}

function countChar(string, char) {
  var charCount = 0;
  for (i=0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      charCount++;
    }
  }
  return charCount;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4