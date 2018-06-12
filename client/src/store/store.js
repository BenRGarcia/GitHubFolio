import { createStore } from 'redux';

const initialState = {

}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  return state;
}

const store = createStore(reducer);

export default store;