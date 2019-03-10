const person = {
  imie: 'Jarek',
  nazwisko: 'Pilat',
  wiek: 45,
  email: 'pilatjaroslaw@xxx.pl',
  adres: {
    ul: 'Brzoskwiniowa',
    nr: 31,
    kod: '55-114'
  },
  rokUrodzenia: function() {
    return 2019 - this.wiek;
  },
  hobby: ['rower','bieganie','szachy']

}

let val;

val = person.imie;
val = person;
console.log(val);

val = person.wiek;
console.log(val);

val = person.adres;
console.log(val);

val = person.hobby[2];
console.log(val);

val = person.rokUrodzenia();
console.log(val);

const ludzie = [{osoba: 'Aga', wiek:30}, {osoba: 'Zenon', wiek:25}, {osoba: "Ola", wiek: 55}];

for (i=0;i<ludzie.length;i++) {
  console.log(ludzie[i].osoba);
}