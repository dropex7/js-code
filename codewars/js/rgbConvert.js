function rgb(r, g, b) {
  let res = "";
  for (arg of arguments) {
    if (arg < 0) {
      res += "00";
      continue;
    } else if (arg > 255) {
      res += "FF";
      continue;
    }
    res +=
      arg.toString(16).length < 2 ? "0" + arg.toString(16) : arg.toString(16);
  }
  return res.toUpperCase();
}

console.log(rgb(20, 101, 7));
