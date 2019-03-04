class ChangeValue {
  constructor() {
    this.incBtn = document.querySelectorAll('.inc');
    this.descBtn = document.querySelectorAll('.desc');
  }

  changeValue(btn) {
    const inputBill = document.querySelector('#input-bill');
    const inputUsers = document.querySelector('#input-users');
    inputBill.value = null;
    inputUsers.value = null;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      let wrapper = btn.parentElement;
      let input = wrapper.querySelector('input');
      if (e.target.parentElement.classList.contains('inc')) {
        if (input.id === inputBill.id) {
          inputBill.value++;
        } else if (input.id === inputUsers.id) {
          inputUsers.value++;
        };
      } else if (e.target.parentElement.classList.contains('desc')) {
        if (input.id === inputBill.id) {
          inputBill.value--;
          if (inputBill.value < 0) {
            inputBill.value = 0;
          }
        } else if (input.id === inputUsers.id) {
          inputUsers.value--;
          if (inputUsers.value < 0) {
            inputUsers.value = 0;
          }
        };
      }
    });
  }
}

let changeValue = new ChangeValue();

changeValue.incBtn.forEach(btn => changeValue.changeValue(btn));
changeValue.descBtn.forEach(btn => changeValue.changeValue(btn));