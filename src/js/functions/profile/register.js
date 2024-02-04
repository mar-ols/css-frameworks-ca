import { API_BASE, API_REGISTER } from "../../api/constants.js";
import { registerSuccess } from "../userMessages/registerSuccess.js";
import { registerUnsuccessful } from "../userMessages/registerUnsuccessful.js";

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
    const status = json.statusCode;
    console.log(json);
    if (response.ok) {
      registerSuccess();
    } else if (status === 400) {
      registerUnsuccessful();
    }
  } catch (error) {
    console.error(error);
  }
}
