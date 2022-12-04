import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

let delayValue = 0;
let stepDelayValue = 0;
let maxCounterValue = 0;

const onFormSubmit = e => {
  e.preventDefault();

  const { delay, step, amount } = formRef.elements;

  delayValue = Number(delay.value);
  stepDelayValue = Number(step.value);
  maxCounterValue = Number(amount.value);

  for (let i = 1; i <= maxCounterValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += stepDelayValue;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formRef.addEventListener('submit', onFormSubmit);
