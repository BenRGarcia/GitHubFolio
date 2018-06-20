import { EDIT_USER_INFO, FETCH_USER_INFO } from "../constants/action-types";


export const initialState = {
  userInfo: {
    pinnedRepositories: []
  },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return { ...state, userInfo: action.payload };
    case EDIT_USER_INFO:
      const updatedInfo = [action.payload, ...state.userInfo];
      return { ...state, userInfo: updatedInfo };
    default:
      return state;
  }
};

export default rootReducer;
