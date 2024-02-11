import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";

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
