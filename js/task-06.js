const validationInput = document.getElementById('validation-input');
const expectedLength = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
  const actualLength = validationInput.value.length;

  validationInput.classList.remove('valid', 'invalid');

  if (actualLength === expectedLength) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
});