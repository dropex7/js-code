/* LINK
*  https://www.codewars.com/kata/53368a47e38700bd8300030d
**/

let names = [
    { name: 'Bart' }
]

function list(names) {
    let result = ''
    names.map((name, index) => {
        (index === names.length - 1) ? result += name.name: result += name.name + ', '
    })
    if (names.length < 2) {
        return result
    }
    return result.substr(0, result.lastIndexOf(',')) + ' &' + result.substr(result.lastIndexOf(',') + '&'.length)
}

console.log(list(names))
