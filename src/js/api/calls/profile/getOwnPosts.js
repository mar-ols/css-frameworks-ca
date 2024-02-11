import { API_BASE, API_PROFILES, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { loader } from "../../../functions/loader.js";

export async function getOwnPosts() {
  loader();
  const getUserName = loadStorage("profile");
  const userPostsAPI = `${API_BASE}${API_PROFILES}/${getUserName.userName}${API_POSTS}`;
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