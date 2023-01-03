const palindromes = function (str) {
    const reverseString = function (str) {
        var splitString = str.split('');
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join('');
        return joinArray
    };

    result = reverseString(str).replace(/[.,\s\/#!$%\^&\*;:{}=\-_`~()]/g, "").toUpperCase()
    string = str.replace(/[.,\s\/#!$%\^&\*;:{}=\-_`~()]/g, "").toUpperCase()
    if (result === string) {
        return true
    }
    else {
        console.log(result)
        console.log(string)
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
