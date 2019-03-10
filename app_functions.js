//FUNCTION DECLARATIONS

function pozdrowienie() {
  // console.log('Cześć');
  return 'hello';
}

console.log(pozdrowienie());

function przywitanie (imie = 'Jarek', nazwisko = 'Pilat')   {
  return `Witaj mój miły ${imie} ${nazwisko}`
}

console.log(przywitanie());
console.log(przywitanie('Kasia','Talik'));

const mnozenie = function (x=1,y=1) {
  return x*y;
};

console.log(mnozenie(5,10));

//IMMIDIATELY INVOKABLE FUNCTION EXPRESSION
(function() {
  console.log('Wykonaj się natychmiast!')
})();

(function(name) {
  console.log(`Witaj ${name}`)
})('Jacuś');

//PROPERTY METHODS 
const todo = {
  add: function() {
    console.log('Nowe todo');
  },
  edit: function(id) {
    console.log(`Please edit ${id}.`);
  }
}

todo.add();
todo.edit(34);

todo.delete = function (){
  console.log('Delete todo');
};

todo.delete();