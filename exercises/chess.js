var size = 8;
var result = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++)
    result += ((i + j) % 2 == 0 ? " " : "#");
  result += "\n";
}
console.log(result);
