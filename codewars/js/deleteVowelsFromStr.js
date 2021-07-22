function disemvowel(str) {
  ["a", "e", "i", "o", "u"].forEach((word) => {
    str = str.replace(new RegExp(word, "gi"), "");
  });
  return str;
}

console.log(disemvowel("This website is for losers LOL!"));
