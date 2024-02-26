import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

/**
 * This function takes an object as the parameter. It stringifies the content of the object before sending a POST API call to the database to create a new post, and returns the result in .json format.
 * @param {object} newPost Object containing values from CreatePost form
 * @returns .json format response from API call
 * @example
 * ```
 * async function makePost(postData) {
 *   const API_URL = "https://apiurl.com";
 *   const token = "s2jh5wy9fas8a9y2";
 *   try {
 *     const data = {
 *       method: "POST",
 *       headers: {
 *         "Content-Type": "application/json",
 *         Authorization: `Bearer ${token}`,
 *       }
 *       body: JSON.stringify(postData),
 *     };
 *     const response = await fetch(API_URL, data);
 *     const dataResult = await response.json();
 *     if (dataResult.ok) {
 *       return dataResult;
 *     }
 *   } catch(error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function createPost(newPost) {
  const createPostAPI = API_BASE + API_POSTS;
  const token = loadStorage("token");
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    };
    const response = await fetch(createPostAPI, postData);
    const newPostResult = await response.json();
    if (newPostResult.ok) {
      return newPostResult;
    }
  } catch (error) {
    console.error(error);
  }
}
