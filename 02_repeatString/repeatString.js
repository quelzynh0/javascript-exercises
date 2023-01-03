const repeatString = function (string, num) {
    let final = '';
    if (num >= 0) {
        while (num > 0) {
            num--
            final = final + string
        }
        return final
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
