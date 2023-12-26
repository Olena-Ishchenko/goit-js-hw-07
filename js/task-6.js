function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
create.addEventListener('click', () => {
  if (input.value >= 1 && input.value <= 100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = '';
  }
});

function createBoxes(amount) {
  // let size = 30;
  for (let i = 1; i <= amount; i++) {
    const size = 30 + (i - 1) * 10;
    const divBox = document.createElement('div');
    divBox.classList.add('box');
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.width = `${size}px`;
    divBox.style.height = divBox.style.width;
    boxes.append(divBox);
    // size += 10;
  }
}
destroy.addEventListener('click', () => {
  destroyBoxes();
});
function destroyBoxes() {
  boxes.innerHTML = '';
}
