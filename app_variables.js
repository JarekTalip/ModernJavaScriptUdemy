let val;

val = 15;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(15);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4+4);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String([1,2,3,4,5]);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (false).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = '555';
val = Number (val);
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(1));

val = Number (null);
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(1));

val = Number ([1,3]);
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(1));

val = parseInt('100.54');
val = parseFloat('100.55');
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));