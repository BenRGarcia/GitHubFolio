import { EDIT_USER_INFO, FETCH_USER_INFO } from "../constants/action-types";


export const initialState = {
  userInfo: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
    return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
