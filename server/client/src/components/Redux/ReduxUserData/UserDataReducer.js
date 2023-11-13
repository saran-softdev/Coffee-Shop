//  This is UserDataReducer.js

import * as types from "./UserDataActionType.js";

const setLoginUserEmail = localStorage.getItem("loginUserEmail");
const setLoginUserName = localStorage.getItem("loginUserName");
const setLoginUserImage = localStorage.getItem("loginUserImage");

const init = {
  userEmail: setLoginUserEmail ? JSON.parse(setLoginUserEmail) : null,
  userName: setLoginUserName ? JSON.parse(setLoginUserName) : null,
  userImage: setLoginUserImage ? JSON.parse(setLoginUserImage) : null
};

// const init = {
//   userEmail: null,
//   userName: null,
//   userImage: null
// };

export const UserDataReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETUSEREMAIL:
      return {
        ...state,
        userEmail: payload
      };

    case types.GetUserName:
      return {
        ...state,
        userName: payload
      };

    case types.GETUSERIMAGE:
      return {
        ...state,
        userImage: payload
      };

    case types.LOGOUTUSER:
      return {
        ...state,
        userEmail: null,
        userName: null,
        userImage: null
      };

    default:
      return state;
  }
};
