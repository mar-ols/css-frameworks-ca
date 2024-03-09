import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { loader } from "../../../functions/loader.js";
import { saveStorage } from "../../../functions/storage/localStorage.js";

/**
 * This function makes an API call with an access token taken from localStorage to fetch all posts from the database. It saves the posts to localStorage and returns the posts in .json format.
 * @returns .json result
 * @example
 * ```
 * async function getPosts() {
 *   const API_URL = "https://apiurl.com";
 *   const token = "s2jh5wy9fas8a9y2";
 *   try {
 *     const response = await fetch(API_URL, {
 *        "Content-Type": "application/json",
 *       Authorization: `Bearer ${token}`,
 *     });
 *     const posts = await response.json();
 *     if(response.ok) {
 *       saveStorage("posts", posts);
 *       return posts;
 *     }
 *   } catch(error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function getPosts() {
  loader();
  const getPostsAPI = API_BASE + API_POSTS + `?_author=true`;

  const token = loadStorage("token");
  try {
    const response = await fetch(getPostsAPI, {
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
      saveStorage("posts", posts);
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * This function takes a number as the parameter and sends an API call with an access token taken from localStorage to fetch a specific post from the database. It removes a loader in the case of a positive response and returns the post in .json format.
 * @param {number} id ID of post
 * @returns .json format response from API call
 * @example
 * ```
 * async function getPost(id) {
 *   const API_URL = "https://apiurl.com";
 *   const token = "s2jh5wy9fas8a9y2";
 *   const singlePost_API = API_URL + `/` + id;
 *   try {
 *     const response = await fetch(singlePost_API, {
 *        "Content-Type": "application/json",
 *       Authorization: `Bearer ${token}`,
 *     });
 *     const post = await response.json();
 *     if(response.ok) {
 *       return post;
 *     }
 *   } catch(error) {
 *     console.error(error);
 *   }
 * }
 * ```
 */
export async function getPost(id) {
  loader();
  const getPostsAPI = API_BASE + API_POSTS + `/` + id + `?_author=true`;
  const token = loadStorage("token");
  try {
    let response = await fetch(getPostsAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const post = await response.json();
    if (response.ok) {
      const getLoader = document.querySelector(".loader");
      if (getLoader) {
        getLoader.classList.remove("loader");
      }
      return post;
    }
  } catch (error) {
    console.error(error);
  }
}
