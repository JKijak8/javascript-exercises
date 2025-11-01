const removeFromArray = function (array, ...toRemove) {
  toRemove.forEach((element) => {
    while (true) {
      let index = array.indexOf(element);
      if (index < 0) {
        return;
      }
      array.splice(index, 1);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
