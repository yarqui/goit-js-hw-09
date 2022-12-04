import { Notify } from 'notiflix/build/notiflix-notify-aio';

formRef = document.querySelector('.form');

let promiseCounter = 1;
let delayValue = 0;
let stepDelayValue = 0;
let maxCounterValue = 0;

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = formRef.elements;

  delayValue = delay.value;
  stepDelayValue = step.value;
  maxCounterValue = amount.value;

  createPromise(promiseCounter, delayValue);
}

function createPromise(position, delay) {
  console.log('delayValue:', delayValue);
  console.log('promiseCounter:', promiseCounter);

  const shouldResolve = Math.random() > 0.3;

  // TEST IF PROMISE POSITION IS LESS THEN AMOUNT
  if (promiseCounter > maxCounterValue) {
    console.log("don't make promises");
    return;
  }
  // **********************************

  //  PROMISE EXAMPLE***********
  setInterval(() => {
    const promise = new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
    // ***********************************

    // THEN & CATCH OF PROMISE
    promise
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    // ***********************************

    promiseCounter += 1;

    delayValue += stepDelayValue;
    console.log('position2:', position);
  }, delayValue);
}

formRef.addEventListener('submit', onFormSubmit);
