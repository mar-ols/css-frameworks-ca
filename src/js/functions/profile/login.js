import { API_BASE, API_LOGIN } from "../../api/constants.js";
import { loginUnsuccessful } from "../userMessages/loginUnsuccessful.js";

const action = API_LOGIN;

export async function login(user) {
  const loginURL = API_BASE + action;
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
    const status = json.statusCode;

    if (response.ok) {
      window.location.href = "profile/";
    } else if (status === 401) {
      loginUnsuccessful();
    }
  } catch (error) {
    console.error(error);
  }
}
