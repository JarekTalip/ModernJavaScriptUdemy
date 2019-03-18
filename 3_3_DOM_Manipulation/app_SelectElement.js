// document.getElementById()

console.log(document.getElementById('task-title'));

const TaskTitle = document.querySelector('#task-title');

TaskTitle.style.background = '#333';
TaskTitle.style.color = 'white';
TaskTitle.innerText = 'Tasks List';
TaskTitle.textContent = 'Todays Tasks List';
TaskTitle.innerHTML = '<span style = "color: red">Tasks</span>';


document.querySelector('li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'purple';
document.querySelector('li:nth-child(2)').style.color = 'yellow';


// document.querySelector()

let item;

item = document.querySelector('.delete-item');
item = document.querySelector('i:last-child');
item = document.querySelector('li:nth-child(3)');

item.style.fontSize = "3rem";

console.log(item);

// console.log(TaskTitle);
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.ccolor = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




