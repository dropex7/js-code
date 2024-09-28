/* LINK
*  https://www.codewars.com/kata/514b92a657cdc65150000006
**/
const getMultipleCount = (divider, number) => Math.floor((number - 1) / divider)

const getSumOfArray = (array) => array.reduce((val, sum) => val + sum, 0)

const DIVIDERS = [3, 5]

function solution(number){
    if(number <= 0) return 0
    const allNumbers = new Set([])

    DIVIDERS.forEach((divider) => {
        for (let i = 1; i <= getMultipleCount(divider, number); i++) allNumbers.add(i * divider)
    })

    return getSumOfArray(Array.from(allNumbers))
}
