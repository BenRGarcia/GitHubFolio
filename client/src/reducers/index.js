import { EDIT_USER_INFO, FETCH_USER_INFO , EDIT_REPOS} from "../constants/action-types";


export const initialState = {
  userInfo: {
    displayName: "",
    email: "",
    bio: "",
    pinnedRepositories: []
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return { ...state, userInfo: action.payload };
    case EDIT_USER_INFO:
      console.log("action pay" , action.payload)
      return { ...state, userInfo: action.payload};
    case EDIT_REPOS:
      console.log("action pay*********************" , action.payload)
      return { ...state, userInfo: action.payload};
    default:
      return state;
  }
};

export default rootReducer;
