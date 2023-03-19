
const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');
const valueField = document.getElementById('value');
let valCount = 0;

incr.addEventListener('click', onIncrement);
decr.addEventListener('click', onDecrement);

function onIncrement() {
  valCount += 1;
  valueField.textContent = valCount;
}
function onDecrement() {
  valCount -= 1;
  valueField.textContent = valCount;
}
