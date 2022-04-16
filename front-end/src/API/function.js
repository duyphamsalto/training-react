import { API } from "./constant";

const token = localStorage.getItem("loggingInUser")
  ? JSON.parse(localStorage.getItem("loggingInUser")).token
  : null;

export async function fetchCardData(setter) {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  const json = await res.json();
  setter(json.slice(0, 28));
}

export async function fetchUserData(dataObj, setter) {
  const url = `${API.USER.GET}?page=${dataObj.current}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  setter({
    ...dataObj,
    users: json.data,
    current: json.current_page,
    total: json.total,
    lastPage: json.last_page,
  });
}

export async function isLogin(body) {
  const url = `${API.USER.LOGIN}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const token = await res.json();
  return res.ok && res.status === 200 ? token : false;
}
