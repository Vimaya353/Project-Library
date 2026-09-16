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

function displayBooks(){
    const library = document.querySelector("#library");

    library.innerHTML = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");

        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>${book.read ? "Read" : "Not Read"}</p>
        `;
        library.appendChild(bookCard);
    });
}

displayBooks();