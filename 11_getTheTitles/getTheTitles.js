const getTheTitles = function () {
    const books = [
        {
            title: 'Book',
            author: 'Name'
        },
        {
            title: 'Book2',
            author: 'Name2'
        }
    ]
    let titles = []
    for (let title in books) {
        titles.push(books[title]['title'])
    }
    return titles

};

// Do not edit below this line
module.exports = getTheTitles;
