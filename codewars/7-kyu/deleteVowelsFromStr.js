/* LINK
*  https://www.codewars.com/kata/52fba66badcd10859f00097e
**/

function disemvowel(str) {
  ["a", "e", "i", "o", "u"].forEach((word) => {
    str = str.replace(new RegExp(word, "gi"), "");
  });
  return str;
}

console.log(disemvowel("This website is for losers LOL!"));
