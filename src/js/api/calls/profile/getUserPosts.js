import { API_BASE, API_PROFILES } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { loader } from "../../../functions/loader.js";

export async function getUserPosts() {
  loader();
  const getUserName = loadStorage("profile");
  const userPostsAPI = `${API_BASE}${API_PROFILES}/${getUserName.userName}/posts`;
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
