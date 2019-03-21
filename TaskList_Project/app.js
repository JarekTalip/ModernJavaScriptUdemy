//Define the variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
;

//Load all eventlisteners
loadEventListners();

// FUNCTION TO LOAD EVENT LISTENERS
function loadEventListners() {
  
  //dom load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //submit task
  form.addEventListener('submit', addTask);
  //remove task
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// GET TASKS FROM LS FUNCTION 
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
  //create li
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text and append to li
  li.appendChild(document.createTextNode(task));
  //create link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //delete icon
  link.innerHTML = '<i class="fas fa-check"></i>';
  //append the link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);
  })
}


//ADD TASK FUNCTION
function addTask(e) {
  if (taskInput.value ==='') {
    alert('Type the task');
  }

  //create li
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //delete icon
  link.innerHTML = '<i class="fas fa-check"></i>';
  //append the link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);
  //store in local storage
  storeLocal(taskInput.value);

  //clear input
  taskInput.value = '';

e.preventDefault();
}

//STORE LOCAL FUNCTION
function storeLocal(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//REMOVE TASK FUNCTION
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
         e.target.parentElement.parentElement.remove();

        // remove from LS
        removeLocal(e.target.parentElement.parentElement);
    }
  }
}

//REMOVE FROM LS FUNCTION
function removeLocal(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task,index) => {
    if(taskItem.textContent === task) {
      tasks.splice(index,1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//CLEAR TASKS FUNCTION
function clearTasks () {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //clear from LS
  clearLocal();
}

//CLEAR FROM LS FUNCTION
function clearLocal() {
  localStorage.clear();
}

//filter tasks
function filterTasks(e) {
  let text=e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if (item.toLocaleLowerCase().indexOf(text) !=-1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );
}
