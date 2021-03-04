function numberDoubler(num) {
    while (num < 100){
        num *= 2
    }
    return num
}

function stringRepeater(str) {
    while ( str.length < 10){
        str += str
    }
    return str
}

function makeDivisible(x, y) {
    // Your code here
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};