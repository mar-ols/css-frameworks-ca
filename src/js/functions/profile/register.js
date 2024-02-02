import { API_BASE, API_REGISTER } from "../../api/constants.js";

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
  } catch (error) {
    console.error(error);
  }
}
