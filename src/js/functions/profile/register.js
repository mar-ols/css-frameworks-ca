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
    const json = await response.json();
    if (response.ok) {
      registerSuccess();
      console.log(json);
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}
