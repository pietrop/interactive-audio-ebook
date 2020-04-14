const listFiles = require('./index.js');

function getBooks() { // [ '59.json' ]
    const booksFileNames = listFiles('prep-utils/json');
    // return booksFileNames;
    return booksFileNames.map(bookFileName => {
        // const bookId = parseId(bookFileName);
        // Static pages for books
        // paths[`/books/${bookId}`] = { page: `/books/[bookId]`, query: { bookId: bookId} };
        const book = require(path.join(process.cwd(), `prep-utils/json/${bookFileName}`))
        // const chapters = book.chapters;
        // Static pages for chapters in each book
        // chapters.forEach((chapter, index)=>{
        // paths[`/books/${bookId}/${index}`] = { page: `/books/[bookId]/[chapterId]`, query: { bookId: bookId, chapterId: index} };
        // })
        return book;
    });
}
