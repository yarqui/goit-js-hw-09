import { Notify } from 'notiflix/build/notiflix-notify-aio';

formRef = document.querySelector('.form');

let promiseCounter = 0;
let delayValue = 0;
let stepDelayValue = 0;
let maxCounterValue = 0;

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = formRef.elements;

  maxCounterValue = amount.value;
  delayValue = delay.value;
  stepDelayValue = step.value;

  createPromise(promiseCounter, delayValue);

  promiseCounter += 1;
  delayValue += stepDelayValue;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  if (promiseCounter > maxCounterValue) {
    console.log("don't make promises");
    return;
  }

  promise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
}

formRef.addEventListener('submit', onFormSubmit);

// createPromise(2, 500);
