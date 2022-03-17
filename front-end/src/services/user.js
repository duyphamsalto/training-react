import { loginStart, loginSuccess, loginFail, logout } from "features/users/userSlice";
import { API } from "../configs/constant";
import { fetchAsPost } from "./api";

export async function fetchLogin(body, dispatch) {
  dispatch(loginStart());
  const res = await fetchAsPost(API.USER.LOGIN, body);
  if (res.isOk) {
    return dispatch(loginSuccess(res.data));
  }

  return dispatch(loginFail(res.data.errors));
}

export async function fetchLogout(dispatch) {
  const res = await fetchAsPost(API.USER.LOGOUT);
  if (res.isOk) {
    return dispatch(logout());
  }
}
