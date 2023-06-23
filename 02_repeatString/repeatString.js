const repeatString = function (str, num) {
  if (num < 0) {
    return Error("ERROR");
  }
  return "hey".repeat(num);
};
console.log(repeatString("hey", 5));
// Do not edit below this line
module.exports = repeatString;
