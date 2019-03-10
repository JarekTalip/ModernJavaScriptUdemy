const name='Jaroslaw';
const lastName='Pilat';
const age = 45;
const str = 'Hello my name is Tomek Romek i Atomek'
const stri = 'programming, running, good food, sport'

let val;
val = name + lastName;
val = name + ' ' + lastName;

console.log(val);

val += ' fiku miku'

console.log(val);

val= 'To jest wspaniałe. Mr.John\'s son'

val= val.length;
console.log(val);

val= name.concat(' ', lastName);
console.log(val);

val = name.length;
console.log(val);

val = lastName.concat('Hello');
console.log(val);

val = name.toUpperCase();
console.log(val);

val = name.toLowerCase();
console.log(val);

val = name[0];
console.log(val);

val = lastName.indexOf('t');
console.log(val);

val = name.lastIndexOf('a');
console.log(val);

val = lastName.charAt('0');
val = lastName.charAt(lastName.length - 1);
console.log(val);

val = name.substring(1,5);
console.log(val);

val = name.slice(2,5);
console.log(val);

val = name.slice(-4);
console.log(val);

val = str.split(' ');
console.log(val);

val = stri.split(',');
console.log(val);

val = str.replace('Romek', 'Zdzisław');
console.log(val);

val = str.includes('Tomek');
console.log(val);
