import { FETCH_USER_INFO, EDIT_USER_INFO, EDIT_REPOS, FETCH_REPOS  } from "../constants/action-types";

export const fetchUserInfo = () => dispatch => {
  fetch('/api/user/data', { credentials: 'include' })
    .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_USER_INFO,
        payload: data
      }))
}


export const fetchRepos = (repos) => dispatch => {
  return fetch('/api/user/pinnedrepos', {
    credentials: 'include',  
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
      },
    body: JSON.stringify(  
        [repos]
      )
    }).then((response) => {
        return response.json() 
    }).then((newRepos) => 
      dispatch({
        type: FETCH_REPOS,
        payload: newRepos
    })   
  )
}

export const editUserInfo = (infoToEdit) => dispatch => {
  console.log(infoToEdit)
	return fetch('/api/user/data', {
    credentials: 'include',  
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify(  
		   infoToEdit
		  )
		}).then((response) => {
		    return response.json() 
		}).then((newUserInfo) => 
      dispatch({
        type: EDIT_USER_INFO,
        payload: newUserInfo
    })   
  )
}

export const editRepos = (infoToEdit) => dispatch => {
	return fetch('/api/user/pinnedrepos', {
    credentials: 'include',  
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify(infoToEdit.repositories) 
		}).then(() => {
		return(
      dispatch({
        type: EDIT_REPOS,
        payload: infoToEdit
      })
    )
    }
  ).then(console.log('AFTER edit repo call in ACTIONS', infoToEdit))  
}


	







