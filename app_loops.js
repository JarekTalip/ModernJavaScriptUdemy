// FOR LOOP

for (let i=0; i<10; i++){
  if (i===3) {
    console.log('The number 3 is my favourite');
    continue;
  }

  if (i===7) {
    console.log('7 stops the loop');
    break;
  }
  
  console.log(i);
}

// WHILE LOOP

let j = 0;

while(j<10) {
  if (j===3) {
    console.log('The number 3 is my favourite');
  }

  // if (j===7) {
  //   console.log('7 stops the loop');
  //   break;
  // }
  
  console.log(j);
  j++;
}

const cars = ['Fiat','Renault','Citroen','Ford'];

for (i=0;i < cars.length;i++) {
  console.log(cars[i]);
}

cars.forEach(function(car, id, array){
  console.log(`${id} : ${car}`);
  console.log(array);
});

const users = [
  {id:1, name: 'Jarek'},
  {id:2, name: 'Zbynio'},
  {id:3, name: 'Jagna'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

const user = {
  name: 'Misio',
  name2: 'Pysio',
  age: 56
}

for (x in user) {
  console.log(`${x} : ${user[x]}`);
}