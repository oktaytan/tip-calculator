(function () {
  // get all the values
  const form = document.querySelector('#tipForm');
  const amount = document.querySelector('#input-bill');
  const users = document.querySelector('#input-users');
  const service = document.querySelector('#input-service');

  // customer feedback
  const feedback = document.querySelector('#feedback');
  const loader = document.querySelector('#loader');
  const results = document.querySelector('#results');

  // submit form
  form.addEventListener('submit', e => {
    e.preventDefault();

    let bill = amount.value;
    let people = users.value;
    let quality = service.value;

    if ((bill === '' || bill <= '0') || (people === '' || people <= '0') || quality === '0') {
      feedback.innerHTML = 'Please check the values';
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
      }, 3000);
    } else {
      if (results.classList.contains('show')) {
        results.classList.remove('show');
      }
      loader.classList.add('show');
      setTimeout(() => {
        loader.classList.remove('show');
        try {
          showResult(bill, people, quality);
        } catch (err) {
          console.log(err);
        }
        clearForm();
      }, 3000);
    }
  });

  // show results
  function showResult(bill, people, quality) {
    let percent = 0;

    switch (quality) {
      case '1':
        percent = 0.2;
        break;
      case '2':
        percent = 0.1;
        break;
      case '3':
        percent = 0.02;
        break;
    }

    let tipAmount = parseInt(bill) * percent;
    let total = parseInt(bill) + tipAmount;
    let person = total / parseInt(people);

    document.getElementById('tip-amount').textContent = tipAmount.toFixed(2);
    document.getElementById('total-amount').textContent = total.toFixed(2);
    document.getElementById('person-amount').textContent = person.toFixed(2);
    results.classList.add('show');
  }


  // clear form
  function clearForm() {
    amount.value = '';
    users.value = '';
    service.value = '';
  }


})();