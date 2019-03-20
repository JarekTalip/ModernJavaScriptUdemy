//Define the variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
;

//Load all eventlisteners
loadEventListners();

//loadEvnetListeners function
function loadEventListners() {
  //submit task
  form.addEventListener('submit', addTask);
  //remove task
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

//addTask function
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

  //clear input
  taskInput.value = '';

e.preventDefault();
}

//removeTask function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
         e.target.parentElement.parentElement.remove();
    }
  }
}

//clear tasks
function clearTasks () {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
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
