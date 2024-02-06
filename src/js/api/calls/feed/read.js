import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

export async function getPosts() {
  const getPostsAPI = API_BASE + API_POSTS;
  const token = loadStorage("token");
  try {
    const response = await fetch(getPostsAPI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    if (response.ok) {
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getPost(id) {
  //
}
