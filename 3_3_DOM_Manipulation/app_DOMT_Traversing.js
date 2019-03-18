const list=document.querySelector('ul.collection');
const firstListItem = document.querySelector('li.collection-item:first-child');
let val;

val = list;
val = firstListItem;

//Child Nodes

val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeName;

// Get children

val = list.children;
val = list.children[4];
list.children[0].textContent = 'To ja duch niepokorny';

val = list.children[1].children;
val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild;

val = firstListItem.parentNode;
val = firstListItem.parentElement;
val = firstListItem.parentElement.parentElement;

val = firstListItem.nextSibling;
val = firstListItem.nextElementSibling;
val = firstListItem.nextElementSibling.nextElementSibling;

val = firstListItem.previousElementSibling;

console.log(val);