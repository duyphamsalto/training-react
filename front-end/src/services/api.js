import { CONSTANT } from "../configs/constant";

export const TIME_OUT = CONSTANT.TIME_OUT;

export function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function getHeader() {
  return { ...authHeader(), "Accept": "application/json", "Content-Type": "application/json" };
}

/**
 * { isOk: false, data: {}, isInvalid: false }
 * isInvalid = false: handle for cancel request, Internal server error
 * @param {string} url
 * @param {object} options
 * @param {integer} timeout
 * @returns
 */
async function handleFetch(url, options, timeout) {
  try {
    const res = await fetchWithTimeout(url, options, timeout);
    if (!res.ok) {
      const errors = (await res.json()) || res.statusText;
      if (res.status === 401) {
        window.location = '/login';
      }
      return { isOk: false, data: errors, isInvalid: true, status: res.status };
    }
    return { isOk: true, data: await res.json(), isInvalid: true };
  } catch (error) {
    return { isOk: false, data: {}, isInvalid: false };
  }
}

async function fetchWithTimeout(resource, options, timeout = TIME_OUT) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}


/**
 * Fetch data with method GET
 * @param {string} url
 * @param int timeout
 * @returns
 */
export async function fetchAsGet(url, timeout = TIME_OUT) {
  return handleFetch(url, { method: "GET", headers: getHeader() }, timeout);
}

/**
 * Fetch data with method POST
 * @param string url
 * @param {object} body
 * @param {int} timeout
 * @returns
 */
export async function fetchAsPost(url, body = {}, timeout = TIME_OUT) {
  const options = {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify(body),
  };

  return handleFetch(url, options, timeout);
}

/**
 * Fetch data with method POST
 * @param string url
 * @param {object} body
 * @param {int} timeout
 * @returns
 */
export async function login(url, body = {}, timeout = TIME_OUT) {
  const options = {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  return handleFetch(url, options, timeout);
}
