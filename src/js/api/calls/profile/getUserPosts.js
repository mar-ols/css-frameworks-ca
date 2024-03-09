import {
  API_BASE,
  API_PROFILES,
  authorName,
  API_POSTS,
} from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { loader } from "../../../functions/loader.js";

/**
 * This function sends a GET API call to the database to retrieve the posts of a specific user.  It returns the user profile in json format.
 * @returns .json format response from API call
 * @example
 * ```
 * async function getUserPosts() {
 *   const userPostsAPI = `${API_BASE}${API_PROFILES}/${authorName}${API_POSTS}`;
 *   const token = loadStorage("token");
 *   try {
 *     const response = await fetch(userPostsAPI, {
 *       headers: {
 *         "Content-Type": "application/json",
 *          Authorization: `Bearer ${token}`,
 *       },
 *     });
 *     const posts = await response.json();
 *     if (response.ok) {
 *       return posts;
 *     }
 *   } catch(error) {
 *     console.error(error);
 *   }
 * ```
 */
export async function getUserPosts() {
  loader();
  const userPostsAPI = `${API_BASE}${API_PROFILES}/${authorName}${API_POSTS}`;
  const token = loadStorage("token");
  try {
    const response = await fetch(userPostsAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    if (response.ok) {
      const getLoader = document.querySelector(".loader");
      if (getLoader) {
        getLoader.classList.remove("loader");
      }
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
}
