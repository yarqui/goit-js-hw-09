import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

startBtnRef = document.querySelector('button[data-start]');
timerDayRef = document.querySelector('.value[data-days]');
timerHourRef = document.querySelector('.value[data-hours]');
timerMinRef = document.querySelector('.value[data-minutes]');
timerSecRef = document.querySelector('.value[data-seconds]');

// console.log('timerDayRef:', timerDayRef.textContent);
// console.log('timerHourRef:', timerHourRef.textContent);
// console.log('timerMinRef:', timerMinRef.textContent);
// console.log('timerSecRef:', timerSecRef.textContent);

startBtnRef.disabled = true;

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
function updateTimerInterface() {
  timerDayRef.textContent = timer.days;
  timerHourRef.textContent = timer.hours;
  timerMinRef.textContent = timer.minutes;
  timerSecRef.textContent = timer.seconds;
}
function onStartBtnClick() {
  setInterval(() => {
    console.log('it"s interval');
    // timer = convertMs(selectedDateMs - currentDateMs);

    updateTimerInterface();
  }, 1000);
}

let timer = 0;
let selectedDateMs = 0;
const currentDate = new Date();
const currentDateMs = currentDate.getTime();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > currentDate) {
      selectedDateMs = selectedDates[0].getTime();

      timer = convertMs(selectedDateMs - currentDateMs);

      updateTimerInterface();

      enableBtn(startBtnRef);

      return;
    }
    disableBtn(startBtnRef);

    window.alert('Please choose a date in the future');
  },
};

flatpickr('input#datetime-picker', options);

startBtnRef.addEventListener('click', onStartBtnClick);
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
