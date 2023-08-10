const validationInput = document.getElementById('validation-input');
const requiredLength = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
  const currentValue = validationInput.value;

  if (currentValue.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
