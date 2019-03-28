// Book Constructor
console.log(1);

function Book(tytyl, autor, isbn) {
    this.tytul = tytul;
    this.autor = autor;
    this.isbn = isbn;
}

console.log(2);

// UI Constructor
function UI() {}
console.log(3);

//Event listeners
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Get form values
    const tytul = document.querySelector('#tytuł').value,
            autor = document.querySelector('#autor').value,
            isbn = document.querySelector('#ISBN').value

    console.log(`${tytul},${autor},${isbn}`);
    e.preventDefault();
})