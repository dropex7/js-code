/* LINK
*  https://www.codewars.com/kata/5592e3bd57b64d00f3000047
**/

function findNb(m) {
    var n = 1;
    while (m > 0) {
        m -= Math.pow(n, 3)
        if (m === 0) {
            return n
        }
        n++
    }
    return (-1);
}
console.log(findNb(135440716410000))
