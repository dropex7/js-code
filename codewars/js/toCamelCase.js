function toCamelCase(str) {
    return str.replace(/_/g, '-').replace(/\b\w/ig, (word, index) => {
        return (index === 0) ? word : word.toUpperCase()
    }).replace(/-/g, '')
};

let str = "the_stealth_warrior"
console.log(toCamelCase(str))