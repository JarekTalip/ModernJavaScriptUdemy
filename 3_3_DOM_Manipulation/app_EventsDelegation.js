// Events delegation

const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
  }
  
}