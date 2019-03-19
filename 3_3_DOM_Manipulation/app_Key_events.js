const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//Clear input cell
taskInput.value = ''

// form.addEventListener('submit', runEvent);
// taskInput.addEventListener('keydown', runEvent);

// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);


function runEvent(e) {
    // e.preventDefault();
    console.log(e.target.value);
    console.log(`EVENT TYPE: ${e.type}`);
    // heading.innerText = e.target.value;
    // console.log(taskInput.value);
   
}