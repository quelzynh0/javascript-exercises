const findTheOldest = function (x) {

    x.forEach(person => {
        if (person['yearOfDeath'])
            person['age'] = person['yearOfDeath'] - person['yearOfBirth'];
    });

    x.forEach(person => {
        if (Number.isInteger(person['age']) == false) {
            person['age'] = new Date().getFullYear() - person['yearOfBirth']
        }
        else {

        }
    });
    let oldest = 0
    x.forEach(person => {
        if ((person['age']) >= oldest) {
            oldest = person['age']
            oldestName = person['name']
        }
        else {
        }

    });

    return oldestName
};

// Do not edit below this line
module.exports = findTheOldest;
