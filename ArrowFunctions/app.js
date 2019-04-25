const cardText = document.querySelector('.card-text');
const cardBody = document.querySelector('.card-body');
let textInput = '';
let newHtml = '';

// cardText.textContent = 'Hello';

const sayHello1 = function () {
    textInput += 'Hello1';
}

sayHello1();

const sayHello2 = () => {
    textInput += ' Hello2';
}

sayHello2();

const sayHello3 = () => textInput += ' Hello3'

sayHello3();

const sayHello4 = (name, surname) => textInput += ` Hello4 ${name} ${surname}`

sayHello4('Jarek','Pilat');
cardText.textContent = textInput;


const users = ['Jarek', 'Zbyszek', 'Wojtek', 'Antoni'];

const nameLengths = users.map(function(name) {
    return name.length;
})

const nameLengths1 = users.map((name) => {
    return name.length;
})

const nameLengths2 = users.map((name) => name.length);

const div1 = document.createElement('div');
cardBody.parentNode.appendChild(div1);
nameLengths2.forEach((x) => {
    newHtml += `<li>${x}</li>`
})

div1.innerHTML = newHtml;


console.log(nameLengths);
console.log(nameLengths1);
console.log(nameLengths2);
