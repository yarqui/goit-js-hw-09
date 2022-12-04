import { Notify } from 'notiflix/build/notiflix-notify-aio';

formRef = document.querySelector('.form');

let promiseCounter = 0;
let delayValue = 0;
let stepDelayValue = 0;
let maxCounterValue = 0;

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = formRef.elements;

  delayValue = delay.value;
  stepDelayValue = step.value;
  maxCounterValue = amount.value;

  const timerId = setInterval(
    createPromise,
    delayValue,
    promiseCounter,
    delayValue
  );
}

function createPromise(position, delay) {
  if (promiseCounter >= maxCounterValue) {
    console.log("don't make promises");
    clearInterval(timerId);
    return;
  }

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });

  promise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });

  promiseCounter += 1;
  console.log('promiseCounter:', promiseCounter);

  delayValue += stepDelayValue;
}

formRef.addEventListener('submit', onFormSubmit);
