let val;

const data = new Date();

val = data;

console.log(data);
console.log(typeof val);

val = data.toString();

console.log(data);
console.log(typeof val);

let urodziny = new Date();
urodziny = '2019-03-10';
urodziny = new Date('2019-03-01');

val = data.getDate();
val = data.getFullYear();
val=data.getMonth();
val = data.getHours();
val = data.getMilliseconds();
val = data.getTime();

console.log(val);
console.log(typeof val);

urodziny.setMonth(5);
urodziny.setFullYear(1990);
urodziny.setHours(22);
urodziny.setMinutes(55);

console.log(urodziny);
console.log(typeof val);