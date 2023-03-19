let valCount = 0;
const decr = document.querySelector ('button[ data-action="decrement"]');
const incr = document.querySelector ('button[ data-action="increment"]');
const valueField =document.getElementById ('value');
incr.addEventListener('click', addNumber );
decr.addEventListener('click', removeNumber );
function addNumber() {
  valCount += 1;
  valueField.textContent = valCount;

};
function removeNumber() {
  valCount -= 1;
  valueField.textContent = valCount;

};
