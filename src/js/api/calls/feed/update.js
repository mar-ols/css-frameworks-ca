import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { id } from "../../constants.js";

/**
 * This function takes an object as the parameter. It stringifies the content of the object before sending a PUT API call to the database to update a post, and returns the result in .json format.
 * @param {object} updatedPost Object containing values from UpdatePost form
 * @returns .json format response from API call
 * @example
 * ```
 * async function updatePost(postData) {
 *   const API_URL = "https://apiurl.com";
 *   const token = "s2jh5wy9fas8a9y2";
 *   if(!id) {
 *     throw new Error ("Delete requires a post ID.");
 *   }
 *   const updatePost_API = API_URL + `/` + id;
 *   try {
 *     const data = {
 *       method: "PUT",
 *       headers: {
 *         "Content-Type": "application/json",
 *         Authorization: `Bearer ${token}`,
 *       }
 *       body: JSON.stringify(postData),
 *     };
 *     const response = await fetch(API_URL, data);
 *     const updatedPost = await response.json();
 *     if (response.ok) {
 *       return updatedPost;
 *     }
 *   } catch(error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function updatePost(updatedPost) {
  const token = loadStorage("token");
  if (!id) {
    throw new Error("Update requires a post ID.");
  }
  const updatePostAPI = API_BASE + API_POSTS + `/` + id;
  try {
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedPost),
    };
    const response = await fetch(updatePostAPI, postData);
    const updatedPostResult = await response.json();
    if (updatedPostResult.ok) {
      return updatedPostResult;
    }
  } catch (error) {
    console.error(error);
  }
}
