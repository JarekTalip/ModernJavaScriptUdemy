class Book {
    constructor(tytul, autor, isbn) {
        this.tytul = tytul;
        this.autor = autor;
        this.isbn = isbn;
        }
    }

class UI {
    
    addBookToList (book) {
        //get book-list element
        const bookList = document.querySelector('#book-list');
        //create new row element
        const row = document.createElement('tr');
        //create cells with tytul, autor, isbn i deletebutton
        row.innerHTML = `
            <td>${book.tytul}</td>
            <td>${book.autor}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">x</a></td>
        `
        //append the row to book-list
        bookList.appendChild(row);
        }

        showAlert (msg, className) {
            //Construct UI elements
            const div = document.createElement('div');
            div.className = `alert ${className}`;
            div.appendChild(document.createTextNode(msg));
                const parent = document.querySelector('.container');
                const form = document.querySelector('#book-form');
            parent.insertBefore(div, form);

            //Timeout after 3s
            setTimeout(function() {
                document.querySelector('.alert').remove();
            }, 2000);
        }

    deleteBook (target) {
        if(target.className = 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    
    cleanForm () {
        document.querySelector('#tytuł').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#ISBN').value = '';
    }
}

// Local storage calass and methods
class Store {
    static addBookLS (book) {
        const books = Store.getBooksLS();
        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBookLS (isbn) {
        const books = Store.getBooksLS();
        books.forEach(function(book,index) {
            if(book.isbn === isbn) {
                books.splice(index,1);
            }            
        })
        localStorage.setItem('books',JSON.stringify(books));
    }

    static displayBooksLS () {
        const books = Store.getBooksLS();

        const ui = new UI();
        // Add UI elements
        books.forEach((book) => {
            ui.addBookToList(book);
        })
    }

    static getBooksLS () {
        let books;
        if(localStorage.getItem('books')===null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
}

// DOM loaded event listener
document.addEventListener('DOMContentLoaded', Store.displayBooksLS);


//Event listeners
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Get form values
    const tytul = document.querySelector('#tytuł').value,
            autor = document.querySelector('#autor').value,
            isbn = document.querySelector('#ISBN').value

    
    // New UI element with book
    const ui = new UI();

        //Validation of input
        if (tytul ==='' || autor === '' || isbn === '') {
    
            //Show error alert
            ui.showAlert('Proszę wypełnij poprawnie pola ...','error');

        } else {
            // New book
            const book = new Book(tytul,autor,isbn);

            // Run addBookToList method
            ui.addBookToList(book);

            // Run addBookLS
            Store.addBookLS(book);
            
            //Show error alert
            ui.showAlert('Książka dodana ...','success');  
        }

    // Run clearFields method
    ui.cleanForm();

    e.preventDefault();
})

// EventListener delete
    document.querySelector('#book-list').addEventListener('click', (e) => {
        const ui = new UI();
        ui.deleteBook(e.target);

        //delete from local storage
        Store.removeBookLS(e.target.parentElement.previousElementSibling.textContent);
        ui.showAlert('Książka usunięta', 'success');

        e.preventDefault();
    })