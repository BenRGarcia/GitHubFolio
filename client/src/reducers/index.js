import { ADD_USER_INFO } from "../constants/action-types";

export const initialState = {
  userInfo: {
    name: 'Ben Garcia',
    email: 'bgarcia@gmail.com',
    bio: 'Really cool dude who knows a lot about coding',
    userImage: 'https://www.veterantv.com/wp-content/uploads/2017/08/f5d784aa1eabbde15ba5e2d90c3ba828.jpg'
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
    return { ...state, userInfo: state.userInfo };
    default:
      return state;
  }
};

export default rootReducer;

