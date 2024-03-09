import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

/**
 * This function takes a number as the parameter and sends a DELETE API call to remove a post from the database and returns the result in json format.
 * @param {number} id ID of post
 * @returns .json format response from API call
 * @example
 * ```
 * async function deletePost(id) {
 *   const API_URL = "https://apiurl.com";
 *   const token = "df23hna4343bj";
 *   try {
 *     if(!id) {
 *       throw new Error ("Delete requires a post ID.");
 *     }
 *     const removePost_API = API_URL + `/` + id;
 *     const response = await fetch(removePost_API, {
 *       method: "DELETE",
 *       headers: {
 *         "Content-Type": "application/json",
 *         Authorization: `Bearer ${token}`,
 *       },
 *     }),
 *     const result = await response.json();
 *     if(response.ok) {
 *       return result;
 *     }
 *   } catch(error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function removePost(id) {
  const token = loadStorage("token");
  try {
    if (!id) {
      throw new Error("Delete requires a post ID.");
    }
    const removePostAPI = API_BASE + API_POSTS + `/` + id;
    const response = await fetch(removePostAPI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}
