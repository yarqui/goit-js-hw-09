import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

startBtnRef = document.querySelector('[data-start]');
inputDateRef = document.querySelector('input#datetime-picker');
timerDayRef = document.querySelector('.value[data-days]');
timerHourRef = document.querySelector('.value[data-hours]');
timerMinRef = document.querySelector('.value[data-minutes]');
timerSecRef = document.querySelector('.value[data-seconds]');

startBtnRef.disabled = true;

let timerValueObj = {};
let timerValueMs = '';
const INTERVAL = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] >= Date.now()) {
      timerValueMs = Date.parse(selectedDates[0]) - Date.now();
      timerValueObj = convertMs(timerValueMs);

      timerDayRef.textContent = addLeadingZero(timerValueObj.days);
      timerHourRef.textContent = addLeadingZero(timerValueObj.hours);
      timerMinRef.textContent = addLeadingZero(timerValueObj.minutes);
      timerSecRef.textContent = addLeadingZero(timerValueObj.seconds);

      enableEl(startBtnRef);

      startBtnRef.addEventListener('click', onStartBtnClick);

      return;
    }
    disableEl(startBtnRef);

    Notify.failure('Please choose a date in the future');
  },
};

function disableEl(el) {
  el.disabled = true;
}

function enableEl(el) {
  el.disabled = false;
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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStartBtnClick() {
  disableEl(startBtnRef);
  disableEl(inputDateRef);

  startBtnRef.removeEventListener('click', onStartBtnClick);

  const timerId = setInterval(() => {
    if (timerValueMs <= INTERVAL) {
      clearInterval(timerId);
      return;
    }

    timerValueObj = convertMs(timerValueMs - INTERVAL);

    timerDayRef.textContent = addLeadingZero(timerValueObj.days);
    timerHourRef.textContent = addLeadingZero(timerValueObj.hours);
    timerMinRef.textContent = addLeadingZero(timerValueObj.minutes);
    timerSecRef.textContent = addLeadingZero(timerValueObj.seconds);

    timerValueMs -= INTERVAL;
  }, INTERVAL);
}

flatpickr(inputDateRef, options);
