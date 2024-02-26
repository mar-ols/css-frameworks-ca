import { API_BASE, API_PROFILES, authorName } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

/**
 * This function sends a GET API call to the database to fetch the profile of a specific user. It returns the user profile in json format.
 * @returns .json format response from API call
 * @example
 * ```
 * async function getProfile() {
 *   const getProfileAPI = `${API_BASE}${API_PROFILES}/${authorName}`;
 *   const token = loadStorage("token");
 *   try {
 *     const response = await fetch(getProfileAPI, {
 *       headers: {
 *         "Content-Type": "application/json",
 *         Authorization: `Bearer ${token}`,
 *       },
 *     });
 *     const user = await response.json();
 *     if (response.ok) {
 *       return user;
 *     }
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function getProfile() {
  const getProfileAPI = `${API_BASE}${API_PROFILES}/${authorName}`;
  const token = loadStorage("token");
  try {
    const response = await fetch(getProfileAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await response.json();
    if (response.ok) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}
