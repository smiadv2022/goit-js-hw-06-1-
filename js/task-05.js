const refs ={
  input: document.querySelector('[id="name-input"'),
  output: document.querySelector('[id="name-output"'),
  // textSpan: document.querySelector('span'),
};
refs.input.addEventListener('input', inputChange);
function inputChange (event) {
  if (event.currentTarget.value.trim()!==""){
    refs.output.textContent=event.currentTarget.value;
  } else 
  refs.output.textContent='Anonymous';
  
}