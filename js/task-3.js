const inputText = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputText.addEventListener('input', () => {
  const value = inputText.value.trim();
  if (value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = value;
  }
});
