/* LINK
*  https://www.codewars.com/kata/54da5a58ea159efa38000836
**/

// Гениальное решение с помощью XOR
// const findOdd = (xs) => xs.reduce((a, b) => {
//     console.log(`${a}, ${b} = ${a ^ b}`)
//     return a ^ b
// });

function findOdd(A) {
    const result = new Set([])

    for(let num of A){
        if(result.has(num)){
            result.delete(num)
        }else{
            result.add(num)
        }
    }

    return Array.from(result)[0]
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


