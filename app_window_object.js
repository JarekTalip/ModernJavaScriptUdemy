// WINDOW METHODS / OBJECTS / PROPERTIES 

// let wiadomosc = prompt('Ale o co tu chodzi');

// alert(wiadomosc);

// if (confirm('Czy to prawda?')) {
//   console.log('Tak');
// } else {
//   console.log('Nie');
// }

let val1;
let val2;
let val3;
let val4;

val1 = window.outerHeight;
val2 =window.outerWidth;

val3 = window.innerHeight;
val4 = window.innerWidth;

console.log(`${val1}, ${val2}, ${val3}, ${val4}`);

let valX;
let valY;

valX = window.scrollX;
valY = window.scrollY;

console.log(`ScrollX = ${valX} ScrollY = ${valY}`);

//LOCATION OBJECT

  // let val;
  // val=window.location;
  // val=window.location.hostname;
  // val=window.location.port;


  // window.location.href = "http://www.google.com";
  // window.location.reload();

  window.history.go(-5);

  // val = window.navigator
  // val = window.navigator
  // val = window.navigator
  val = window.navigator.appName;
  val = window.navigator.appVarsion;
  val = window.navigator.userAgent;
  val = window.navigator.platform;
  val = window.navigator.vendor;
  val = window.navigator.language;


  // val = window.history.length;

  console.log(val);
  