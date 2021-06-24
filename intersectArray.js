const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
// ответ [2,2]

const arr3 = [1, 2, 2, 1, 2];
const arr4 = [2, 2];
// ответ [4,9]

const intersect = function (array1, array2) {
  let result = array1.filter((item, index) => {
    return array2.indexOf(item) > -1
      ? array2.splice(array2.indexOf(item), 1)
      : false;
  });
  return result;
};

console.log(intersect(arr3, arr4));
