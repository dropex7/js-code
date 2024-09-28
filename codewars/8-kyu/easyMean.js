/* LINK
*  https://www.codewars.com/kata/563e320cee5dddcf77000158
**/

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, val) => acc + val) / marks.length);
}

getAverage([2, 2, 2, 2]);
