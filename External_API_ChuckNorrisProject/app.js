document.querySelector('.get-jokes').addEventListener('click', getJokes);

// getJokes function
function getJokes(e) {
  const number = document.querySelector('#number').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if(this.status === 200 ) {
      const response = JSON.parse(this.responseText);
      let output = '';
      
      console.log(response);

      if (response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`
          console.log(joke, output);
        });
      } else{
        output+='Coś poszło źle!'
      }
      document.querySelector('ul.jokes').innerHTML = output;

    }
  }
  xhr.send();
  e.preventDefault();
}