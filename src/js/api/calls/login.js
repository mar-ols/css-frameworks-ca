import { API_BASE, API_LOGIN } from "../constants.js";
import { loginRegSuccess } from "../../functions/userMessages/registerSuccess.js";
import * as storage from "../../functions/storage/localStorage.js";

/**
 * This function takes an object as parameter, stringifies the object and sends an API POST call to the database to log in a user. If response is successful it saves an access token and the user information in localStorage and redirects the user to the feed page. If the user has input the wrong email or password a message will be passed to the user.
 * @param {object} user Object containing values from loginForm
 * @example
 * ```
 * async function login(user) {
 *   const loginURL = API_BASE + API_LOGIN;
 *   try {
 *     const postData = {
 *       method: "POST",
 *       headers: {
 *         "Content-Type": "application/json",
 *       },
 *       body: JSON.stringify(user),
 *     };
 *     const response = await fetch(loginURL, postData);
 *     const json = await response.json();
 *     if (response.ok) {
 *       storage.saveStorage("token", json.accessToken);
 *       storage.saveStorage("profile", {
 *         userName: json.name,
 *         userEmail: json.email,
 *         userAvatar: json.avatar,
 *       });
 *       window.location.href = "feed/";
 *     } else {
 *       const status = json.statusCode;
 *       if (status === 401) {
 *         loginRegSuccess(`Wrong email or password!`);
 *       }
 *     }
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function login(user) {
  const loginURL = API_BASE + API_LOGIN;
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(loginURL, postData);
    const json = await response.json();
    if (response.ok) {
      storage.saveStorage("token", json.accessToken);
      storage.saveStorage("profile", {
        userName: json.name,
        userEmail: json.email,
        userAvatar: json.avatar,
      });

      window.location.href = "feed/";
    } else {
      const status = json.statusCode;
      if (status === 401) {
        loginRegSuccess(`Wrong email or password!`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
