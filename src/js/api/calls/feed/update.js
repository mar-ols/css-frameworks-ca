import { API_BASE, API_POSTS } from "../../constants.js";
import { loadStorage } from "../../../functions/storage/localStorage.js";
import { id } from "../../constants.js";

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
