import { ADD_USER_INFO } from "./constants/action-types";

export const addUserInfo = userInfo => ({ type: "ADD_USER_INFO", payload: userInfo });