function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  vowels.forEach((word) => {
    vowelsCount +=
      str.match(new RegExp(word, "g")) !== null
        ? str.match(new RegExp(word, "g")).length
        : 0;
  });
  return vowelsCount;
}

console.log(getCount("aaa"));
