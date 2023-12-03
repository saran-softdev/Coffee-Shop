// This is UserDataAction.js

import * as types from "./UserDataActionType.js";

export const loginUserEmail = (loginUserEmail) => {
  localStorage.setItem("loginUserEmail", JSON.stringify(loginUserEmail));
  return {
    type: types.GETUSEREMAIL,
    payload: loginUserEmail
  };
};

export const loginUserName = (loginUserName) => {
  localStorage.setItem("loginUserName", JSON.stringify(loginUserName));
  return {
    type: types.GetUserName,
    payload: loginUserName
  };
};

export const loginUserImage = (loginUserImage) => {
  localStorage.setItem("loginUserImage", JSON.stringify(loginUserImage));
  return {
    type: types.GETUSERIMAGE,
    payload: loginUserImage
  };
};

export const LogoutHandle = (payload) => {
  localStorage.removeItem("loginUserEmail");
  localStorage.removeItem("loginUserName");
  localStorage.removeItem("loginUserImage");
  // console.log("Local Clear");
  return {
    type: types.LOGOUTUSER,
    payload
  };
};