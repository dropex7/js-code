function decoder(sequence) {
  let binaryNumbers = [];
  let i = 0;
  while (sequence.length != 0) {
    if (sequence[i] === "0") {
      i++;
    } else {
      let tempNumb = sequence.slice(i, i * 2 + 1);
      binaryNumbers.push(parseInt(tempNumb, 2) - 1);
      sequence = sequence.slice(i * 2 + 1, sequence.length);
      console.log(
        "🚀 ~ file: decoder.js ~ line 11 ~ decoder ~ sequence",
        sequence
      );
      i = 0;
    }
  }
  return binaryNumbers;
}

console.log(
  decoder("111000000000110010000100000000011001000010000000001100100001111")
);
