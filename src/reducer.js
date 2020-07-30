import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'RANDOME':
        return state + action.payload
      default:
        return state
    }
}

export let store = createStore(counter);