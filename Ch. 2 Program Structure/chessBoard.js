var string = "";

var size = 22;
var sizeEven;

if (size % 2 == 0) {
  sizeEven = true;
} else {
  sizeEven = false;
}

var j = 1;

for (var i = 1; i <= (Math.pow(size, 2) + size); i++) {
    if (sizeEven) {
      j = i;
    }
    if (i % (size + 1) == 0) {
      string += "\n"; 
    }
    else if (j % 2 == 0) {
      string += "#";
      j++;  
    } else {
      string += " ";
      j++;
    }
}

console.log(string);