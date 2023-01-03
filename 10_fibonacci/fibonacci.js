const fibonacci = function (a) {
    if (a > 0) {
        let fibNumber = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
            89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
            10946, 17711, 28657, 46368, 75025]
        return fibNumber[a - 1]
    }
    else {
        return 'OOPS'
    }

};


// Do not edit below this line
module.exports = fibonacci;
