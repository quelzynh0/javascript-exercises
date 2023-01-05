const removeFromArray = function () {
    let same = []
    //Comparação e cópia dos argumentos passados com o array
    arguments[0].forEach(string => {
        for (let i = 1; i < arguments.length; i++) {
            if (string == arguments[i]) {
                same.push(arguments[i])
            }
            else {
            }
        }

    })
    //Comparação dos arrays e remoção caso seja igual
    for (let i = 0; i < same.length; i++) {
        index = arguments[0].indexOf(same[i]);
        if (index > -1) {
            arguments[0].splice(index, 1);
        }
    }
    return arguments[0]
};

// Do not edit below this line
module.exports = removeFromArray;
