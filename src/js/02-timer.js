import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

startBtnRef = document.querySelector('button[data-start]');

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

let timer = null;
const currentDate = new Date();
const currentDateMs = currentDate.getTime();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > currentDate) {
      let selectedDateMs = selectedDates[0].getTime();

      timer = convertMs(selectedDateMs - currentDateMs);
      console.log(timer);

      enableBtn(startBtnRef);

      return;
    }
    disableBtn(startBtnRef);

    window.alert('Please choose a date in the future');
  },
};

flatpickr('input#datetime-picker', options);

// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
