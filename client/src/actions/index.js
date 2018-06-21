import { FETCH_USER_INFO, EDIT_USER_INFO, FETCH_REPOS, EDIT_REPOS  } from "../constants/action-types";

export const fetchUserInfo = () => dispatch => {
  fetch('/api/user/data', { credentials: 'include' })
    .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_USER_INFO,
        payload: data
      }))
      .then(console.log("fetch user data worked"))
}

export const editRepos = (infoToEdit) => dispatch => {
  console.log('info to edit****************************', infoToEdit)
	return fetch('/api/user/pinnedrepos', {
    credentials: 'include',  
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify(infoToEdit.pinnedRepositories) 
		}).then(() => {
		return
      dispatch({
        type: EDIT_REPOS,
        payload: infoToEdit
    })   
    }
  )
}


export const editUserInfo = (infoToEdit) => dispatch => {
  console.log('info to edit****************************', infoToEdit)
	return fetch('/api/user/data', {
    credentials: 'include',  
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify(  
		   [infoToEdit]
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






// = userInfo => ({ type: EDIT_USER_INFO, payload: userInfo });

