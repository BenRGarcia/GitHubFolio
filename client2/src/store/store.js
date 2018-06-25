import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

/**
 * Helper Functions
 */

const parseJSON = data => data.json();
const handleError = err => console.error(err);

/**
 * Actions
 */

export const fetchUserInfo = () => dispatch => {
  const url = '/api/user/data';
  return fetch(url, { credentials: 'include' })
    .then(parseJSON)
    .then(data => dispatch({
      type: 'FETCH_USER_INFO',
      payload: data
    }))
    .catch(handleError)
}

export const editUserInfo = infoToEdit => dispatch => {
  return fetch('/api/user/data', {
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(infoToEdit)
  })
    .then(parseJSON)
    .then(newUserInfo => dispatch({
      type: 'EDIT_USER_INFO',
      payload: newUserInfo
    }))
    .catch(handleError)
}

export const fetchRepos = () => dispatch => {
  const url = '/api/user/pinnedrepos';
  return fetch(url, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(parseJSON)
    .then(newRepos => dispatch({
      type: 'FETCH_REPOS',
      payload: newRepos
    }))
    .catch(handleError)
}

export const editRepos = infoToEdit => dispatch => {
  const url = '/api/user/pinnedrepos';
  return fetch(url, {
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(infoToEdit.repositories)
  })
    .then(parseJSON)
    .then(data => dispatch({
      type: 'EDIT_REPOS',
      payload: data.repositories
    }))
    .catch(handleError)
}

const initialState = {
  userInfo: {
    profileName: "",
    email: "",
    bio: "",
    chosenTemplate: "",
    repositories: []
  }
};

/**
 * Reducers
 */

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_INFO':
      return { ...state, userInfo: action.payload };
    case 'EDIT_USER_INFO':
      return { ...state, userInfo: action.payload };
    case 'FETCH_REPOS':
      return { ...state, userInfo: action.payload };
    case 'EDIT_REPOS':
      return { ...state, userInfo: { repositories: action.payload }};
    default:
      return state;
  }
};

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store;
