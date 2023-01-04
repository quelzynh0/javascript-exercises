const caesar = function (a, b) {
    const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z']

    const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z']

    const splitString = a.split('');
    let final = [];

    splitString.forEach(string => {
        if (alphabetLower.includes(string)) {
            index = (alphabetLower.indexOf(string)) + b
            if (index >= 26) {
                while (index >= 26) {
                    index = index - 26
                }

            }
            else if (index < 0) {
                while (index < 0) {
                    index = index + 26
                }

            }
            else {

            }
            stringCripto = alphabetLower[index]
            final.push(stringCripto)

        }
        else if (alphabetUpper.includes(string)) {
            index = (alphabetUpper.indexOf(string)) + b
            if (index >= 26) {
                while (index >= 26) {
                    index = index - 26
                }

            }
            else if (index < 0) {
                while (index < 0) {
                    index = index + 26
                }

            }
            else {

            }
            stringCripto = alphabetUpper[index]
            final.push(stringCripto)

        }
        else {
            final.push(string)

        }
    })
    return final.join('');

};

// Do not edit below this line
module.exports = caesar;
