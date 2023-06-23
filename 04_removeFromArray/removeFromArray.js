const removeFromArray = function (array, value) {
  for (let i = 0; i < array.length; i++) {
    if (arguments.length > 2) {
      for (let j = 1; j < arguments.length; j++) {
        if (arguments[j] === array[i]) {
          array.splice(i, 1);
        }
      }
    }
    if (array[i] === value) {
      array.splice(i, 1);
    }
  }
  return array;
};

// const removeFromArray = function (array, ...args) {

//   const newArray = [];

//   array.forEach((item) => {

//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });

//   return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
