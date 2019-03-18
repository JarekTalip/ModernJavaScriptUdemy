//document.getElementsbyClassName

const items = document.getElementsByClassName('collection-item');
let listItems = document.querySelector('ul').getElementsByClassName('collection-item');
listItems = document.querySelectorAll('ul .collection-item');

console.log(items);
console.log(listItems);

//document.getElementsbyTagName

let lis;

lis = document.getElementsByTagName('li');

lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

lis = Array.from(lis);
lis.reverse();

lis.forEach((item, index) => {
  console.log(item.innerHTML);
  item.textContent = `${index}: Hello`;
})

console.log(lis);

let listki = document.querySelectorAll('ul.collection li.collection-item');

listki.forEach((lisc, index) => {
  lisc.textContent = `${index}: Misiu Pysiu`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

console.log(liOdd);
console.log(liEven);

liOdd.forEach((li) => {
  li.style.background = '#ccc';
})

liEven.forEach((li) => {
  li.style.fontSize = '3rem';
})

for (let i=0;i<liEven.length;i++) {
  liEven[i].style.background = 'yellow';
}

// liOdd.style.fontSize = '2rem';
// liEven.style.fontSize = '3rem';