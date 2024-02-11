import { API_BASE, API_REGISTER } from "../constants.js";
import { loginRegSuccess } from "../../functions/userMessages/registerSuccess.js";

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
    const status = json.statusCode;
    if (response.ok) {
      loginRegSuccess(`Registration successful! You can now log in.`);
    } else if (status === 400) {
      loginRegSuccess(
        `Looks like this user already exists, please choose a unique username and email.`
      );
    }
  } catch (error) {
    console.error(error);
  }
}
