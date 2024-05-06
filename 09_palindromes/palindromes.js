const palindromes = function (phrase) {
  let split = phrase
    .toLowerCase()
    .split("")
    .filter(
      (item) => (item.toUpperCase() !== item || !isNaN(item)) && item !== " ",
    );

  const plainText = split.join("");
  const reversed = split.reverse().join("");

  return plainText === reversed;
};

// Do not edit below this line
module.exports = palindromes;
