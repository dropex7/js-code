var number = function(busStops) {
    // Good Luck!
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