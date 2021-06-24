function funk() {
  let resStr = "";
  let mathSymbol = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (i + 1 == arguments.length) {
      resStr += arguments[i];
      break;
    }
    resStr += arguments[i] + mathSymbol;
  }
  return resStr;
}

// Версия со стрелочными функциями

let funk2 = (a, ...args) => {
  let resStr = "";
  for (let i = 0; i < args.length; i++) {
    if (i + 1 == args.length) {
      resStr += args[i];
      break;
    }
    resStr += args[i] + a;
  }
  return resStr;
};

// funk2("*", "asd", "123", "1w3", "1a");
console.log(funk2("*", "asd", "123", "1w3", "1a"));
