function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.background = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  input.value = '';
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});