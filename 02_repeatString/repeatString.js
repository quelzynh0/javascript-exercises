const repeatString = function (string, num) {
    let final = '';
    while (num > 0) {
        num--
        final = final + string
    }
    return final
};

// Do not edit below this line
module.exports = repeatString;
