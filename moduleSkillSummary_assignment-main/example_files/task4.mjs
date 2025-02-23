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

function isbnByAuthor(authorName) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author.includes(authorName)) {
            result.push(books[i].isbn);
        }
    }
    return result;
}

function filterBooksAlphabetically(order = "asc") {
    const result = [...books];
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            const titleA = result[i].title.toLowerCase();
            const titleB = result[j].title.toLowerCase();
            let compare = 0;
            for (let k = 0; k < Math.min(titleA.length, titleB.length); k++) {
                if (titleA[k] < titleB[k]) {
                    compare = -1;
                    break;
                }
                else if (titleA[k] > titleB[k]) {
                    compare = 1;
                    break;
                }
            }
            if (compare === 0) {
                compare = titleA.length - titleB.length;
            }
            if ((order = "asc" && compare > 0) || (order = "desc" && compare < 0)) {
                const temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

function filterBooksChronologically(order = "acs") {
    const result = [...books];
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if ((order === "asc" && result[i].publication_year > result[j].publication_year) || (order === "desc" && result[i].publication_year < result[j].publication_year)) {
                const temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

function filterBooksByAuthorLastName() {
    const list = {};
    for (let i = 0; i < books.length; i++) {
        const authorName = books[i].author;
        let lastName = "";
        for (let j = authorName.length - 1; j >= 0; j--) {
            if (authorName[j] === " ") {
                break;
            }
            lastName = authorName[j] + lastName;
        }
        if (!list[lastName]) {
            list[lastName] = [];
        }
        list[lastName].push(books[i]);
    }
    return list;
}

function filterBooksByAuthorFirstName() {
    const list = {};
    for (let i = 0; i < books.length; i++) {
        const authorName = books[i].author;
        let firstName = "";
        for (let j = 0; j < authorName.length; j++) {
            if (authorName[j] === " ") {
                break;
            }
            firstName += authorName[j];
        }
        if (!list[firstName]) {
            list[firstName] = [];
        }
        list[firstName].push(books[i]);
    }
    return list;
}
