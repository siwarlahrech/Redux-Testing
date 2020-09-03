import { delay, takeLatest, put } from 'redux-saga/effects';

// Increase Counter Async
function* increaseCounterAsync() {
  try {
    yield delay(2000);

    // Dispatch Action To Redux Store
    yield put({ type: 'INCREASE_COUNTER_ASYNC', value: 1 });
  }

  catch (error) { console.log(error); }
}

// Generator: Watch Increase Counter
export function* watchIncreaseCounter() {
    yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
}


// Decrease Counter Async
function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    yield put({ type: 'DECREASE_COUNTER_ASYNC', value: 1 });
  }
  catch (error) { console.log(error);}
}

// Generator: Watch decrease Counter
export function* watchDecreaseCounter() {

  // Take Last Action
  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
}