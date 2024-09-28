/* LINK
*  https://www.codewars.com/kata/5648b12ce68d9daa6b000099
**/

const number = function(busStops) {
    let res = 0
    for (let i = 0; i < busStops.length; i++) {
        res += busStops[i][0] - busStops[i][1]
    }
    return res
}

console.log(number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10]
]))
