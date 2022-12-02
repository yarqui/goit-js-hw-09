const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;

stopBtnRef.disabled = true;

function disableBtn(btn) {
  btn.disabled = true;
}
function enableBtn(btn) {
  btn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function onStartBtnClick() {
  timerId = setInterval(changeBackgroundColor, 1000);

  disableBtn(startBtnRef);

  enableBtn(stopBtnRef);
}

function onStopBtnClick() {
  clearInterval(timerId);

  disableBtn(stopBtnRef);

  enableBtn(startBtnRef);
}

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);
