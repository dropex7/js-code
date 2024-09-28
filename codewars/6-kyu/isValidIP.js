/* LINK
*  https://www.codewars.com/kata/515decfd9dcfc23bb6000006
**/

const isValidIP = (input) => new RegExp('^((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)(\\.(?!$)|$)){4}$').test(input)

console.log(isValidIP('1.2.3.4'))
console.log(isValidIP('123.45.67.89'))
console.log(isValidIP('123.456.78.90'))
console.log(isValidIP('1.2.3'))
console.log(isValidIP('1.2.3.4.5'))
