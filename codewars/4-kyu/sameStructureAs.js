/* LINK
*  https://www.codewars.com/kata/520446778469526ec0000001
**/

Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;
  if (this.length !== other.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (JSON.stringify(this[i]).length !== JSON.stringify(other[i]).length) {
      if (typeof this[i] !== "object" && typeof other[i] !== "object") {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

// console.log([1, 2, 3, 4].isArray());
console.log([1, "[", "]"].sameStructureAs(["[", "]", 1]));
