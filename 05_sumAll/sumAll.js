const sumAll = function (a, b) {
    if (a & b >= 0) {
        let sum = 0
        if (a < b) {
            for (a = a; a <= b; a++) {
                sum = a + sum
            }
        }
        else {
            for (b = b; b <= a; b++) {
                sum = b + sum
            }

        }
        return sum
    }
    else {
        return 'ERROR'
    }

}

// Do not edit below this line
module.exports = sumAll;


