document.querySelector('#loan-form').addEventListener('submit', function(e) {
//hide results
document.querySelector('#results').style.display = 'none';
//show loadaer
document.querySelector('#loader').style.display = 'block';
//run CalculateResults after 2s
setTimeout(CalculateResult, 1000);

  e.preventDefault();

});

  // CalculateResult function
function CalculateResult(e) {
  // Define UI variables
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterests = document.querySelector('#total-interests');

  const principal = parseFloat(amount.value);
  const monthlyInterest = parseFloat(interest.value) /12 /100;
  const monthsNumber = parseFloat(years.value) * 12;

    // Computing results 
    x = Math.pow(1 + monthlyInterest, monthsNumber);
    const monthly = (principal * x * monthlyInterest)/(x - 1);

    if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * monthsNumber).toFixed(2);
      totalInterests.value = (totalPayment.value - principal).toFixed(2);

    //show results
    document.querySelector('#results').style.display = 'block';
    //hide loadaer
    document.querySelector('#loader').style.display = 'none';
    } else {
      //hide loadaer
      document.querySelector('#loader').style.display = 'none';
      showError('Please check your figures!');
    };




  }


  // showError function
  function showError(error) {
  
  //get elements to put the error div
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // create error div
  const errorDiv = document.createElement('div');
  // add class to errorDiv
  errorDiv.className = 'alert alert-danger';
  // textnode
  errorDiv.appendChild(document.createTextNode(error));

  //append errorDiv
  card.insertBefore(errorDiv, heading);

  //clear errorDiv after 3s
  setTimeout(clearError, 3000);
}

//clearError function
function clearError() {
  const errorDiv = document.querySelector('.alert');
  errorDiv.remove();
}