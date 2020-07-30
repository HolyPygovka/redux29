import { incActionCreator, decActionCreator, rndActionCreator } from './actions';
import { store } from './reducer';

const updateCount = (data) => {
  count.innerHTML = data;
}
store.subscribe(() => updateCount(store.getState()));

const decrement = () => {
  store.dispatch(decActionCreator());
}
const increment = () => {
  store.dispatch(incActionCreator());
}
const randome = () => {
  const payload = Math.floor(Math.random()*10);
  store.dispatch(rndActionCreator(payload));
}

const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const rnd = document.getElementById('rnd');
const count = document.getElementById('conter');

dec.addEventListener('click', decrement);
inc.addEventListener('click', increment);
rnd.addEventListener('click', randome);
