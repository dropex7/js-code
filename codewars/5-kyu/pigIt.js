/* LINK
*  https://www.codewars.com/kata/520b9d2ad5c005041100000f
**/

function pigIt(str) {
  let res = [];
  for (word of str.split(" ")) {
    if (word.match("^[A-Za-z]+$")) {
      res.push(word.replace(word[0], "") + word[0] + "ay");
    } else {
      res.push(word);
    }
  }
  return res.join(" ");
}
console.log(pigIt("Hello world , amil noob ! HAHA"));
