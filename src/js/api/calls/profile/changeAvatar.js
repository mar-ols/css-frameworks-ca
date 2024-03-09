import { API_BASE, API_PROFILES, API_MEDIA } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { userFeedback } from "../../../functions/userMessages/feed/feedbackTemplate.js";

/**
 * This function takes a string as a parameter, and sends a PUT API call with an access token from localStorage, to the database to change user avatar. It then returns a json format response and shows the user a message if response is successful.
 * @param {string} avatar URL of image
 * @returns .json format response from API call
 * @example
 * ```
 * async function changeAvatar(avatar) {
 *   const getUser = loadStorage("profile");
 *   const token = loadStorage("token");
 *   const API_URL = "https://apiurl.com";
 *   try {
 *   const postAvatar = {
 *      method: "PUT",
 *      headers: {
 *        "Content-Type": "application/json",
 *        Authorization: `Bearer ${token}`,
 *      },
 *      body: JSON.stringify(avatar),
 *    };
 *    const response = await fetch(API_URL, postAvatar);
 *    const result = await response.json();
 *    if (response.ok) {
 *      userFeedback(`Avatar updated`);
 *      return result;
 *    }
 *  } catch (error) {
 *    console.error(error);
 *  }
 * }
 * ```
 */
export async function changeAvatar(avatar) {
  const getUser = loadStorage("profile");
  const token = loadStorage("token");

  const changeAvatarAPI = `${API_BASE}${API_PROFILES}/${getUser.userName}${API_MEDIA}`;

  try {
    const postAvatar = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(avatar),
    };
    const response = await fetch(changeAvatarAPI, postAvatar);
    const result = await response.json();
    if (response.ok) {
      userFeedback(`Avatar updated`);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
