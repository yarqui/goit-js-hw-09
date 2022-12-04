import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

startBtnRef = document.querySelector('button[data-start]');
timerDayRef = document.querySelector('.value[data-days]');
timerHourRef = document.querySelector('.value[data-hours]');
timerMinRef = document.querySelector('.value[data-minutes]');
timerSecRef = document.querySelector('.value[data-seconds]');

startBtnRef.disabled = true;

let timerObjValue = {};
const date = new Date();
const currentDate = date.getTime();

console.log('currentDate:', currentDate);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] >= Date.now()) {
      onDateInput(selectedDates[0]);
      return;
    }
    disableBtn(startBtnRef);

    window.alert('Please choose a date in the future');
  },
};

function disableBtn(btn) {
  btn.disabled = true;
}
function enableBtn(btn) {
  btn.disabled = false;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function updateTimerInterface(selectedDates) {
  let currentDate = date.getTime();

  timerObjValue = convertMs(selectedDates - currentDate);

  timerDayRef.textContent = timerObjValue.days;
  timerHourRef.textContent = timerObjValue.hours;
  timerMinRef.textContent = timerObjValue.minutes;
  timerSecRef.textContent = timerObjValue.seconds;
}
function onStartBtnClick() {
  timerId = setInterval(() => {
    updateTimerInterface(selectedDates);
  }, 1000);
}

function onDateInput(selectedDates) {
  enableBtn(startBtnRef);
  // selectedDateMs = selectedDates[0].getTime();

  updateTimerInterface(selectedDates);
}

flatpickr('input#datetime-picker', options);

startBtnRef.addEventListener('click', onStartBtnClick);
