import { createStore } from 'redux';

const initialState = {
  counter: 0,
  userName: 'Vasya',
  SEcondName: 'Pypkin'
}

function counter(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, counter: state.counter + 1}
      case 'DECREMENT':
        return state - 1
      case 'RANDOME':
        return state + action.payload
      default:
        return state
    }
}

export let store = createStore(counter);