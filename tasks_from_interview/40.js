var arr = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];

Array.prototype.createObject = function () {
  let result = {};
  for (item of this) {
    result[item.name] = item.value;
  }
  return result;
};

console.log(arr.createObject());
