function getAverage(marks) {
  return Math.floor(marks.reduce((acc, val) => acc + val) / marks.length);
}

getAverage([2, 2, 2, 2]);
