let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}
document.querySelector(".btn").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "block";
});
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    document.getElementById("bookForm").reset();
    document.getElementById("overlay").style.display = "none";
});
function closeForm() {
    document.getElementById("bookForm").reset();
    document.getElementById("overlay").style.display = "none";
}
function displayBooks() {
    const bookListContainer = document.getElementById("bookList");
    bookListContainer.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? 'Read' : 'Not Read'}</p>
            <div class="btn-group">
                <button onclick="toggleReadStatus(${index})"> Read </button>
                <button onclick="removeBook(${index})">Remove </button>
            </div>
        `;
        bookListContainer.appendChild(bookItem);
    });
}
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}
