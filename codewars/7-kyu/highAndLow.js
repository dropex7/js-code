/* LINK
*  https://www.codewars.com/kata/554b4ac871d6813a03000035
**/

function highAndLow(numbers) {
  let min = +numbers.split(" ")[0];
  let max = +numbers.split(" ")[0];
  numbers.split(" ").forEach((num) => {
    if (+num < min) min = num;
    if (+num > max) max = num;
  });
  return `${max} ${min}`;
}

console.log(
  highAndLow(
    "-423 -96 -173 -429 -2102 290 -201 -1163 101 -2549 -1541 439 -1759 -2004 -1571 -2235 -1519 549 -400 131 -1592"
  )
);
