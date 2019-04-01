//Event listener for button
document.querySelector('#button').addEventListener('click', loadData);

// loadData function
function loadData () {
  // New XHR object
    const xhr = new XMLHttpRequest();
  //Open
    xhr.open('GET','data.txt', true);

    xhr.onload = function () {
      if(this.status === 200) {
        // console.log(this.responseText);
        const output = document.createElement('p');
        output.textContent = this.responseText;
        document.querySelector('#output').appendChild(output);
        
      }
    };

    xhr.send();
}