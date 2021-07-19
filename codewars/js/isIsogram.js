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