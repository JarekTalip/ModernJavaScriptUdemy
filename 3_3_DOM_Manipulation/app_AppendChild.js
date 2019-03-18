const li = document.createElement('li');

li.className = 'collection-item';
li.id = 'TestID';
li.setAttribute('title','New Item');

li.appendChild(document.createTextNode('Hellow EveryBody'));

const link = document.createElement('a');
link.className ='delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

document.querySelector('ul.collection').appendChild(li);


console.log(li);