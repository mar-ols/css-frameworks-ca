import { API_BASE, API_REGISTER } from "../../api/constants.js";
import { registerSuccess } from "../userMessages/registerSuccess.js";

const action = API_REGISTER;

export async function register(user) {
  const registerURL = API_BASE + action;
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(registerURL, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      registerSuccess();
    }
  } catch (error) {
    console.error(error);
  }
}
