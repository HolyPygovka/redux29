export const incActionCreator = () => ({ type: 'INCREMENT'});
export const decActionCreator = () => ({ type: 'DECREMENT'});
export const rndActionCreator = (payload) => ({
  type: 'RANDOME',
  payload
});