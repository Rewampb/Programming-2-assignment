import books from './books.json' assert { type: 'json' };

function filterBooksStartWithThe() {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        const title = books[i].title;
        if (title.length >= 3 && title[0] === "T" && title[1] === "h" && title[2] === "e") {
            result.push(books[i]);
        }
    }
    return result;
}

function filterBooksByAuthorWithT() {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        const author = books[i].author.toLowerCase();
        let hasT = false;
        for (let j = 0; j < author.length; j++) {
            if (author[j] === "t") {
                hasT = true;
                break;
            }
        }
        if (hasT) {
            result.push(books[i]);
        }
    }
    return result;
}

function amountBooksAfter1992() {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year > 1992) {
            count++;
        }
    } 
    return count;  
}

function amountBooksBefore2004() {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year < 2004) {
            count++;
        }
    }
    return count;
}
