const name = 'John';
const age = 41;
const job = 'Web Developer';
const city = 'Miami';

let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){encodeURIComponent
  return 'hello';
}

// With template strings (es6)
stronaHtml = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Function: ${hello()}</li>
    <li>Wynik: ${2 * 20}</li>
    <li>${age > 40 ? 'Starszawy' : 'Młodzik'}</li>
  </ul>`;

document.body.innerHTML = stronaHtml
