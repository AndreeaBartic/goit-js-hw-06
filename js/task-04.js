let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueSpan = document.getElementById('value');

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
