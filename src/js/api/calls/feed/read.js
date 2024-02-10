import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { loader } from "../../../functions/loader.js";

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
      getLoader.classList.remove("loader");
      console.log(posts);
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
}

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
