const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

textElement.style.fontSize = fontSizeControl.value + 'px';

const textSize = () => {
  textElement.style.fontSize = `${fontSizeControl.value}px`;
};

fontSizeControl.addEventListener('input', textSize);
