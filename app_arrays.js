//Create arrays
const tablica1 = [43, 46, 5, 13, 58, 100, 1000];
const tablica2 = new Array(35, 45, 86, 15, 15, 35);
const owoce = ['truskawka','jabłko','banan','śliwka'];
const mixed = [ 25, 'człowiek', true, null, {name: 'Jarek', nazwisko: 'Pilat'}, new Date()];

let val;

val = tablica1.length;
tablica1[2] = 1000;
console.log(val);
console.log(tablica1);

val = Array.isArray(tablica2);
console.log(val);

val = tablica1[1];
console.log(val);

val = tablica1.indexOf(13);
tablica1.push(1,2);
tablica1.unshift(99);
val = tablica1.pop();
console.log(val);
val = tablica1.shift();
console.log(val);
val = tablica1.splice(0,3);
console.log(val);
val = tablica1.reverse();
console.log(val);
val = tablica1.concat(tablica2);
console.log(val);
val = owoce.sort();
console.log(val);
val = tablica1.sort(function(x,y) {
  return x - y;
});
console.log(val);

val = tablica1.sort(function(x,y) {
  return y - x;
});

console.log(val);
function mlody(num){
  return num > 50;
}

val = tablica1.find(mlody);

console.log(val);

console.log(tablica1);