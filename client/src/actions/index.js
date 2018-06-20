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

export const editUserInfo = (infoToEdit) => dispatch => {
	return fetch('/api/user/data', { credentials: 'include' }, { 
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify({  
		item: infoToEdit
		  })
		}).then((response) => {
		    return response.json() 
		}).then((infoToEdit) => 
      dispatch({
        type: EDIT_USER_INFO,
        payload: infoToEdit
    })   
  )
  .then(console.log("editUserInfo is being called"))  
}






// = userInfo => ({ type: EDIT_USER_INFO, payload: userInfo });

