const myLibrary = [];

function Book(title,author,pages,read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit","J.R.R. Tolkien", 310, true);
addBookToLibrary("1984","George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird","Harper Lee", 281, true);