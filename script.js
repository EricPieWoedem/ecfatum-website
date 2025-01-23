function createBook (title, author, pages) {
    let read = false; 

    return {
        title,
        author,
        pages,
        toggleReadStatus () {
            read = !read;
        },
        getInfo () {
            return `${title} by ${author}, ${pages} pages, ${read ? "Read" : "Not read"}`
        }
     };
} 

const libraryModule = (() => {
    const books = [];
    
    return {
        addBook (title, author, pages) {
            const book = createBook (title, author, pages);
            books.push(book);
        },
        listBooks () {
            return books.map(book =>book.getInfo());
        }
    }
})();

libraryModule.addBook ("1984", "George Owell", 286, true);
console.log(libraryModule.listBooks());