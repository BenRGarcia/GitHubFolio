import { createStore } from "redux";

const parseJSON = data => data.json();

const handleError = err => console.error(err);

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

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_INFO':
      break;
    case 'EDIT_USER_INFO':
      break;
    case 'FETCH_REPOS':
      break;
    case 'EDIT_REPOS':
      break;
    default:
      break;
  }
};

const store = createStore()

export default store;
