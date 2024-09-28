/* LINK
*  https://www.codewars.com/kata/525f50e3b73515a6db000b83
**/

function createPhoneNumber(numbers){
    const [s, m, e] = [numbers.slice(0, 3).join(''),numbers.slice(3, 6).join(''), numbers.slice(-4).join('')]
    return `(${s}) ${m}-${e}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
