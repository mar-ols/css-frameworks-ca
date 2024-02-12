import { API_BASE, API_LOGIN } from "../constants.js";
import { loginRegSuccess } from "../../functions/userMessages/registerSuccess.js";
import * as storage from "../../functions/storage/localStorage.js";

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
    console.log(json);
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
