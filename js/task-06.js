const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (
    textInput.value.length < textInput.getAttribute('data-length') ||
    textInput.value.length > textInput.getAttribute('data-length')
  ) {
    textInput.classList.add('invalid');
  } else {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
}
