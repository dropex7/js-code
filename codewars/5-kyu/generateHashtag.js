/* LINK
*  https://www.codewars.com/kata/52449b062fb80683ec000024
**/

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    const resultHashTagArray = str.trim().split(" ").filter((value) => !!value)

    if (resultHashTagArray.length === 0) return false

    const resultHashTag = resultHashTagArray.reduce((res, currentValue) => {
        const capitalized =
            currentValue.charAt(0).toUpperCase() +
            currentValue.slice(1)
        return res + capitalized
    }, "#")

    if (resultHashTag.length > 140) {
        return false
    }

    return resultHashTag
}
