function validParentheses(parens) {
    var n = 0;
    for (var i = 1; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false
    }
    return n == 0
}

var parens = '()'

console.log(validParentheses(parens))