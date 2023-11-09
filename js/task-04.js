const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

valueSpan.textContent = counterValue;

//Decrement number
decrementButton.addEventListener('click', () => {
  counterValue--;

  valueSpan.textContent = counterValue;
});

//Increment number
incrementButton.addEventListener('click', () => {
  counterValue++;

  valueSpan.textContent = counterValue;
});