/* LINK
*  https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
**/

function filter_list(l) {
    // Return a new array with the strings filtered out
    let result = l.filter((item) => {
        return (typeof item) != 'string'
    })
    return result
}

console.log(filter_list([1, 2, 3, 'asd']))
