import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

export let offset = 0;

export async function getPosts() {
  const getPostsAPI = API_BASE + API_POSTS + `?limit=15&offset=${offset}`;
  const token = loadStorage("token");
  try {
    let response = await fetch(getPostsAPI, {
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
  const getPostsAPI = API_BASE + API_POSTS + `/` + id;
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
      return post;
    }
  } catch (error) {
    console.error(error);
  }
}
