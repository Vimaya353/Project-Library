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

        bookCard.dataset.id = book.id;

        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>${book.read ? "Read" : "Not Read"}</p>
            <button class="remove-book">Remove</button>
        `;
        library.appendChild(bookCard);
    });

    const removeButtons = document.querySelectorAll(".remove-book");

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const bookCard = button.parentElement;  
            const bookId = bookCard.dataset.id;

            const bookIndex = myLibrary.findIndex(book => book.id === bookId);

            myLibrary.splice(bookIndex, 1);
            displayBooks();
        });
    });
}

displayBooks();

const newBookButton = document.querySelector("#new-book-btn");
const bookDialog = document.querySelector("#book-dialog");

newBookButton.addEventListener("click", () => {
    bookDialog.showModal();
});

const closeDialogButton = document.querySelector("#close-dialog");

closeDialogButton.addEventListener("click", () => {
    bookDialog.close();
});

const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    bookDialog.close();

    bookForm.reset();
});

