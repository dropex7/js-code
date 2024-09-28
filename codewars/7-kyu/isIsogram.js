/* LINK
*  https://www.codewars.com/kata/54ba84be607a92aa900000f1
**/

function isIsogram(str) {
    var uniqStr = []
    var lowercaseStr = str.toLowerCase()
    for (let i = 0; i < lowercaseStr.length; i++) {
        if (uniqStr.includes(lowercaseStr.charAt(i))) {
            return false
        }
        uniqStr.push(lowercaseStr.charAt(i))
    }
    return true
}
console.log(isIsogram(''))
