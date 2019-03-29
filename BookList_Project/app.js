// Book Constructor

function Book(tytul, autor, isbn) {
    this.tytul = tytul;
    this.autor = autor;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

    //addBookToList method
    UI.prototype.addBookToList = function (book) {
        
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

    // bookDelete method
    UI.prototype.bookDelete = function(target) {
        if(target.className = 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    
    // Clear the bookList filed method
    UI.prototype.clearFields = function () {
        document.querySelector('#tytuł').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#ISBN').value = '';
    }

    // showAlert method
    UI.prototype.showAleart = function (msg, className) {

        //Construct UI elements
        div = document.createElement('div');
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
            ui.showAleart('Proszę wypełnij poprawnie pola ...','error');

        } else {
            // New book
            const book = new Book(tytul,autor,isbn);

            // Run addBookToList method
            ui.addBookToList(book);
            
            //Show error alert
            ui.showAleart('Książka dodana ...','success');  
        }

    // Run clearFields method
    ui.clearFields();

    e.preventDefault();
})

// EventListener delete
    document.querySelector('#book-list').addEventListener('click', (e) => {
        const ui = new UI();
        ui.bookDelete(e.target);
        ui.showAleart('Książka usunięta', 'success');

        e.preventDefault();
    })
